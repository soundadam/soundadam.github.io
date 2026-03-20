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
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
};

const emojis = ["🙂", "😄", "🤖", "🎧", "🔊", "✨", "🫧", "🧠", "🌊", "🍊"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function makeParticle(id: number, x: number, y: number): Particle {
  return {
    id,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    x,
    y,
    size: 18 + Math.floor(Math.random() * 20),
    rotate: Math.random() * 28 - 14,
    driftX: Math.random() * 32 - 16,
    driftY: -6 - Math.random() * 18,
    duration: 5.4 + Math.random() * 4.8,
    delay: Math.random() * 0.35,
  };
}

function makeSeedParticles(count: number) {
  return Array.from({ length: count }, (_, index) =>
    makeParticle(
      index + 1,
      8 + Math.random() * 84,
      18 + Math.random() * 70,
    ),
  );
}

export function EmojiTerminal() {
  const idRef = useRef(1000);
  const drainTimeoutRef = useRef<number | null>(null);
  const [mode, setMode] = useState<PlaygroundMode>("pool");
  const [transitionState, setTransitionState] = useState<TransitionState>("idle");
  const [particles, setParticles] = useState<Particle[]>(() => makeSeedParticles(34));
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

    const burst = Array.from({ length: 10 }, () => {
      idRef.current += 1;
      return makeParticle(
        idRef.current,
        clamp(baseX + (Math.random() * 18 - 9), 5, 95),
        clamp(baseY + (Math.random() * 18 - 9), 10, 92),
      );
    });

    setParticles((current) => [...current.slice(-170), ...burst]);
  }

  function openTerminal() {
    if (mode === "terminal" || transitionState === "draining") {
      return;
    }

    setTransitionState("draining");
    drainTimeoutRef.current = window.setTimeout(() => {
      setMode("terminal");
      setTransitionState("idle");
    }, 850);
  }

  function openPool() {
    if (drainTimeoutRef.current) {
      window.clearTimeout(drainTimeoutRef.current);
    }

    setMode("pool");
    setTransitionState("idle");
    setParticles((current) =>
      current.length > 18 ? current : [...current, ...makeSeedParticles(18)],
    );
  }

  function clearPool() {
    setParticles([]);
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
            Particle pool first, terminal only if you want to inspect code.
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            The default state is ambient. If you switch to terminal mode, the
            pool drains downward and turns into a curated source viewer.
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
              onClick={clearPool}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--color-border)] px-4 text-xs font-semibold tracking-[0.08em] text-[var(--color-text)] uppercase transition-colors hover:bg-white"
            >
              clear
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(237,132,74,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%)]" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(12,9,13,0.42))]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="pointer-events-none relative z-10 max-w-lg text-sm leading-7 text-[#ddd1cb]">
                <p>$ pool --ambient</p>
                <p className="mt-2 text-[#b8aaa4]">
                  Click anywhere to release more particles. Switch modes if you
                  want to browse source instead.
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
                    rotate: `${particle.rotate}deg`,
                    ["--drift-x" as string]: `${particle.driftX}px`,
                    ["--drift-y" as string]: `${particle.driftY}px`,
                    ["--pool-duration" as string]: `${particle.duration}s`,
                    ["--pool-delay" as string]: `${particle.delay}s`,
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
