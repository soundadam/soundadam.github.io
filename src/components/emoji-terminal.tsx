"use client";

import { MouseEvent, useState } from "react";

type Particle = {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  delay: number;
};

const emojis = ["🙂", "😄", "🤖", "🎧", "🔊", "✨", "🫧", "🧠", "🌊", "🍊"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function EmojiTerminal() {
  const [particles, setParticles] = useState<Particle[]>([]);

  function handleSpawn(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const baseX = ((event.clientX - rect.left) / rect.width) * 100;
    const baseY = ((event.clientY - rect.top) / rect.height) * 100;

    const burst = Array.from({ length: 8 }, (_, index) => ({
      id: Date.now() + index + Math.floor(Math.random() * 1000),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: clamp(baseX + (Math.random() * 24 - 12), 4, 96),
      y: clamp(baseY + (Math.random() * 24 - 12), 8, 92),
      size: 22 + Math.floor(Math.random() * 16),
      rotate: Math.random() * 30 - 15,
      delay: Math.random() * 0.18,
    }));

    setParticles((current) => [...current.slice(-152), ...burst]);
  }

  return (
    <section className="mt-10 max-w-4xl border-t border-[var(--color-border)] pt-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm tracking-[0.16em] text-[var(--color-text-muted)] uppercase">
            Playground
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">
            A small terminal that gets happier when clicked.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setParticles([])}
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-4 text-xs font-semibold tracking-[0.08em] text-[#f3e7df] uppercase transition-colors hover:bg-[rgba(255,255,255,0.12)]"
        >
          clear
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-[22px] border border-[#3b2b2f] bg-[#2a1f24] shadow-[0_18px_40px_rgba(24,20,16,0.12)]">
        <div className="flex items-center justify-between border-b border-[#45323a] bg-[#3a2a30] px-4 py-3 text-xs text-[#e8d8cf]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="tracking-[0.14em] uppercase">soundadam@home</p>
        </div>

        <div
          onClick={handleSpawn}
          className="relative min-h-[320px] cursor-crosshair overflow-hidden bg-[radial-gradient(circle_at_top,rgba(125,74,58,0.22),transparent_40%),linear-gradient(180deg,#2a1f24_0%,#1c1519_100%)] px-5 py-5"
        >
          <div className="pointer-events-none relative z-10 max-w-lg text-sm leading-7 text-[#dbcfc8]">
            <p>$ click anywhere inside this terminal</p>
            <p className="mt-2 text-[#bcaea6]">
              Each click drops a small burst of emoji into the box. Keep going
              if you want to fill the whole surface.
            </p>
          </div>

          {particles.map((particle) => (
            <span
              key={particle.id}
              className="emoji-burst-item"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                fontSize: `${particle.size}px`,
                rotate: `${particle.rotate}deg`,
                animationDelay: `${particle.delay}s`,
              }}
            >
              {particle.emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
