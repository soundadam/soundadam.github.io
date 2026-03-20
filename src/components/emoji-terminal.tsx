"use client";

import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";

import { sourceSnippets } from "@/content/source-snippets";

type PlaygroundMode = "pool" | "terminal";
type TransitionState = "idle" | "draining";

type Particle = {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  enterX: number;
  enterY: number;
  bobX: number;
  bobY: number;
  bobDuration: number;
  settleDuration: number;
  settleDelay: number;
  bobDelay: number;
  impactDepth: number;
  reboundHeight: number;
  drainX: number;
};

const emojis = ["🙂", "😄", "🤖", "🎧", "🔊", "✨", "🫧", "🧠", "🌊", "🍊"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function pickLane() {
  const roll = Math.random();

  if (roll < 0.12) return 0;
  if (roll < 0.3) return 1;
  if (roll < 0.56) return 2;
  if (roll < 0.8) return 3;
  if (roll < 0.94) return 4;
  return 5;
}

function createPoolParticle(
  id: number,
  anchorX?: number,
  sourceX?: number,
  sourceY?: number,
): Particle {
  const lane = pickLane();
  const settledX = clamp(
    (anchorX ?? 50) + (Math.random() * 26 - 13) - (lane - 2.5) * 0.6,
    7,
    93,
  );
  const settledY = clamp(62 + lane * 4.8 + Math.random() * 6, 60, 92);
  const enterX = sourceX === undefined ? 0 : sourceX - settledX;
  const enterY = sourceY === undefined ? 0 : sourceY - settledY;
  const settleDelay = Math.random() * 0.18;
  const settleDuration =
    0.74 +
    Math.min(Math.abs(enterY) / 42, 0.52) +
    lane * 0.04 +
    Math.random() * 0.14;
  const reboundHeight = 2.8 + (5 - lane) * 0.7 + Math.random() * 2.2;
  const impactDepth = 4.5 + lane * 1.3 + Math.random() * 3.5;

  return {
    id,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    x: settledX,
    y: settledY,
    size: 18 + Math.floor(Math.random() * 18) + (5 - lane),
    rotate: Math.random() * 24 - 12,
    enterX,
    enterY,
    bobX: Math.random() * 4.8 - 2.4,
    bobY: -(0.9 + (5 - lane) * 0.35 + Math.random() * 1.8),
    bobDuration: 5.2 + lane * 0.35 + Math.random() * 2.8,
    settleDuration,
    settleDelay,
    bobDelay: settleDuration + settleDelay,
    impactDepth,
    reboundHeight,
    drainX: Math.random() * 42 - 21,
  };
}

function makeSeedParticles(count: number) {
  return Array.from({ length: count }, (_, index) =>
    createPoolParticle(index + 1, 18 + Math.random() * 64),
  );
}

export function EmojiTerminal() {
  const idRef = useRef(1000);
  const drainTimeoutRef = useRef<number | null>(null);
  const [mode, setMode] = useState<PlaygroundMode>("pool");
  const [transitionState, setTransitionState] = useState<TransitionState>("idle");
  const [particles, setParticles] = useState<Particle[]>(() => makeSeedParticles(46));
  const [activeSnippetId, setActiveSnippetId] = useState(sourceSnippets[0].id);
  const [history, setHistory] = useState<string[]>([
    "$ ls",
    "README.md  src/  public/  package.json",
    "$ pwd",
    "/Users/adam/projects/soundadam.github.io",
  ]);

  const activeSnippet = useMemo(
    () =>
      sourceSnippets.find((snippet) => snippet.id === activeSnippetId) ??
      sourceSnippets[0],
    [activeSnippetId],
  );

  useEffect(() => {
    return () => {
      if (drainTimeoutRef.current) {
        window.clearTimeout(drainTimeoutRef.current);
      }
    };
  }, []);

  function handleSpawn(event: MouseEvent<HTMLDivElement>) {
    if (mode !== "pool" || transitionState === "draining") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const baseX = ((event.clientX - rect.left) / rect.width) * 100;
    const baseY = ((event.clientY - rect.top) / rect.height) * 100;

    const burst = Array.from({ length: 12 }, () => {
      idRef.current += 1;
      return createPoolParticle(
        idRef.current,
        clamp(baseX + (Math.random() * 12 - 6), 10, 90),
        clamp(baseX + (Math.random() * 16 - 8), 5, 95),
        clamp(baseY + (Math.random() * 12 - 6), 6, 88),
      );
    });

    setParticles((current) => [...current.slice(-220), ...burst]);
  }

  function openTerminal() {
    if (mode === "terminal" || transitionState === "draining") {
      return;
    }

    setTransitionState("draining");
    drainTimeoutRef.current = window.setTimeout(() => {
      setMode("terminal");
      setTransitionState("idle");
    }, 960);
  }

  function openPool() {
    if (drainTimeoutRef.current) {
      window.clearTimeout(drainTimeoutRef.current);
    }

    setMode("pool");
    setTransitionState("idle");
    setParticles((current) =>
      current.length > 24 ? current : [...current, ...makeSeedParticles(24)],
    );
  }

  function calmPool() {
    setParticles(makeSeedParticles(22));
  }

  function inspectSnippet(snippetId: string) {
    const snippet =
      sourceSnippets.find((candidate) => candidate.id === snippetId) ??
      sourceSnippets[0];

    setActiveSnippetId(snippet.id);
    setHistory((current) => [
      ...current.slice(-7),
      `$ ${snippet.command}`,
      snippet.path,
    ]);
  }

  return (
    <section className="mt-10 max-w-4xl border-t border-[var(--color-border)] pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
            Playground
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
            A particle pool that can drain into source mode.
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            The default state is a denser pool with slower motion and more
            settling. Terminal mode still exists, but only as a second layer.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openPool}
            className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
              mode === "pool" && transitionState !== "draining"
                ? "border-[var(--color-text)] bg-[var(--color-text)] text-white"
                : "border-[var(--color-border)] text-[var(--color-text)] hover:bg-white"
            }`}
          >
            particle pool
          </button>
          <button
            type="button"
            onClick={openTerminal}
            className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
              mode === "terminal"
                ? "border-[var(--color-accent-strong)] bg-[var(--color-accent-strong)] text-white"
                : "border-[var(--color-border)] text-[var(--color-text)] hover:bg-white"
            }`}
          >
            inspect source
          </button>
          {mode === "pool" ? (
            <button
              type="button"
              onClick={calmPool}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--color-border)] px-4 text-xs font-semibold tracking-[0.08em] text-[var(--color-text)] uppercase transition-colors hover:bg-white"
            >
              calm
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[22px] border border-[#332831] bg-[#261d24] shadow-[0_18px_40px_rgba(24,20,16,0.12)]">
        <div className="flex items-center justify-between border-b border-[#43343e] bg-[linear-gradient(180deg,#4d3b48_0%,#40303b_100%)] px-4 py-3 text-xs text-[#e6d7cf]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="tracking-[0.14em] uppercase">soundadam@ubuntu</p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden bg-[linear-gradient(180deg,#241b22_0%,#191319_100%)]">
          {mode === "pool" || transitionState === "draining" ? (
            <div
              onClick={handleSpawn}
              className="relative min-h-[360px] cursor-crosshair overflow-hidden px-5 py-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(237,132,74,0.11),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_18%)]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(15,11,15,0.55))]" />
              <div className="absolute inset-x-8 bottom-10 h-20 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(231,121,74,0.18),rgba(231,121,74,0.02)_70%,transparent_78%)] blur-[18px]" />
              <div className="absolute inset-x-6 bottom-7 h-12 rounded-[999px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] opacity-70 blur-[0.4px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="pointer-events-none relative z-10 max-w-lg text-sm leading-7 text-[#ddd1cb]">
                <p>$ pool --settle</p>
                <p className="mt-2 text-[#b8aaa4]">
                  Click to add more particles. They now settle toward the lower
                  half of the frame before slowly drifting in place.
                </p>
              </div>

              {particles.map((particle) => (
                <span
                  key={particle.id}
                  className={`emoji-pool-item ${
                    transitionState === "draining" ? "emoji-pool-item-drain" : ""
                  }`}
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    fontSize: `${particle.size}px`,
                    ["--enter-x" as string]: `${particle.enterX}%`,
                    ["--enter-y" as string]: `${particle.enterY}%`,
                    ["--bob-x" as string]: `${particle.bobX}px`,
                    ["--bob-y" as string]: `${particle.bobY}px`,
                    ["--bob-duration" as string]: `${particle.bobDuration}s`,
                    ["--settle-duration" as string]: `${particle.settleDuration}s`,
                    ["--settle-delay" as string]: `${particle.settleDelay}s`,
                    ["--bob-delay" as string]: `${particle.bobDelay}s`,
                    ["--impact-depth" as string]: `${particle.impactDepth}px`,
                    ["--rebound-height" as string]: `${particle.reboundHeight}px`,
                    ["--particle-rotate" as string]: `${particle.rotate}deg`,
                    ["--drain-x" as string]: `${particle.drainX}px`,
                  }}
                >
                  {particle.emoji}
                </span>
              ))}
            </div>
          ) : (
            <div className="grid min-h-[360px] lg:grid-cols-[0.88fr_1.12fr]">
              <div className="border-b border-[#3c2e37] px-5 py-5 lg:border-b-0 lg:border-r">
                <p className="text-xs tracking-[0.14em] text-[#b8aaa4] uppercase">
                  command history
                </p>
                <div className="mt-4 space-y-2 font-mono text-sm leading-6 text-[#e7ddd7]">
                  {history.map((line, index) => (
                    <p key={`${line}-${index}`} className="break-all">
                      {line}
                    </p>
                  ))}
                </div>

                <p className="mt-6 text-xs tracking-[0.14em] text-[#b8aaa4] uppercase">
                  browse files
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {sourceSnippets.map((snippet) => (
                    <button
                      key={snippet.id}
                      type="button"
                      onClick={() => inspectSnippet(snippet.id)}
                      className={`rounded-[14px] border px-3 py-3 text-left transition-colors ${
                        activeSnippetId === snippet.id
                          ? "border-[#f19a61] bg-[rgba(241,154,97,0.10)] text-[#fff2ea]"
                          : "border-[#493743] text-[#d7cbc5] hover:bg-[rgba(255,255,255,0.04)]"
                      }`}
                    >
                      <p className="font-mono text-xs text-inherit">{snippet.path}</p>
                      <p className="mt-2 text-xs leading-5 text-[#b8aaa4]">
                        {snippet.summary}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-5 py-5">
                <p className="font-mono text-sm text-[#f19a61]">$ {activeSnippet.command}</p>
                <p className="mt-3 text-xs tracking-[0.14em] text-[#b8aaa4] uppercase">
                  {activeSnippet.path}
                </p>
                <pre className="mt-4 overflow-x-auto rounded-[16px] border border-[#43343e] bg-[rgba(0,0,0,0.18)] p-4 font-mono text-[12px] leading-6 text-[#ece3de]">
                  <code>{activeSnippet.content}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
