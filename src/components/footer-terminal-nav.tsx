"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type HistoryLine = {
  kind: "prompt" | "output" | "system";
  text: string;
};

const HISTORY_KEY = "soundadam-terminal-history-v1";
const LAST_PATH_KEY = "soundadam-terminal-path-v1";
const MAX_HISTORY_LINES = 56;

const routeMap = {
  home: "/",
  about: "/about",
  blog: "/blog",
  se: "/se",
  contact: "/contact",
} as const;

const routeNames = Object.keys(routeMap) as Array<keyof typeof routeMap>;

const routeSummaries: Record<keyof typeof routeMap, string[]> = {
  home: [
    "route: /",
    "role: sparse front door",
    "contains: entry cards, gravity layer, top-level links",
  ],
  about: [
    "route: /about",
    "role: concise public profile",
    "contains: school, stage, rank, interests",
  ],
  blog: [
    "route: /blog",
    "role: static writing index",
    "contains: architecture notes, workflow notes, research threads",
  ],
  se: [
    "route: /se",
    "role: stable speech-enhancement project page",
    "contains: static/live split, repo link, deployment framing",
  ],
  contact: [
    "route: /contact",
    "role: direct contact surface",
    "contains: email, github, public channels",
  ],
};

function toPromptPath(pathname: string) {
  return pathname === "/" ? "~/soundadam" : `~/soundadam${pathname}`;
}

function helpLines() {
  return [
    "available commands:",
    "ls",
    "pwd",
    "cd home|about|blog|se|contact|..",
    "open home|about|blog|se|contact",
    "cat routes",
    "cat home|about|blog|se|contact",
    "help",
    "clear",
  ];
}

function initialHistory(pathname: string): HistoryLine[] {
  return [
    {
      kind: "system",
      text: "footer terminal ready. type `help` to see commands.",
    },
    {
      kind: "system",
      text: `current route: ${toPromptPath(pathname)}`,
    },
  ];
}

export function FooterTerminalNav() {
  const router = useRouter();
  const pathname = usePathname();
  const bodyRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>(() => {
    if (typeof window === "undefined") {
      return initialHistory(pathname);
    }

    const lastPath = window.sessionStorage.getItem(LAST_PATH_KEY);
    const storedHistory = window.sessionStorage.getItem(HISTORY_KEY);
    let nextHistory = initialHistory(pathname);

    if (storedHistory) {
      try {
        const parsed = JSON.parse(storedHistory) as HistoryLine[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          nextHistory = parsed;
        }
      } catch {}
    }

    if (lastPath !== pathname) {
      nextHistory = [
        ...nextHistory,
        {
          kind: "system",
          text: `entered ${toPromptPath(pathname)}`,
        },
      ];
    }

    window.sessionStorage.setItem(LAST_PATH_KEY, pathname);
    window.sessionStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
    return nextHistory;
  });
  const promptPath = useMemo(() => toPromptPath(pathname), [pathname]);

  useEffect(() => {
    window.sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) {
      return;
    }

    body.scrollTop = body.scrollHeight;
  }, [history]);

  function appendLines(lines: HistoryLine[]) {
    setHistory((current) => [...current, ...lines].slice(-MAX_HISTORY_LINES));
  }

  function navigateTo(target: keyof typeof routeMap) {
    const href = routeMap[target];
    appendLines([
      { kind: "system", text: `navigating to ${href}` },
    ]);
    window.sessionStorage.setItem(LAST_PATH_KEY, href);
    startTransition(() => {
      router.push(href);
    });
  }

  function runCommand(rawInput: string) {
    const value = rawInput.trim();
    if (!value) {
      return;
    }

    const [command, ...rest] = value.split(/\s+/);
    const arg = rest.join(" ");

    appendLines([{ kind: "prompt", text: `${promptPath} $ ${value}` }]);

    if (command === "clear") {
      const nextHistory = initialHistory(pathname);
      setHistory(nextHistory);
      window.sessionStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
      return;
    }

    if (command === "help") {
      appendLines(helpLines().map((text) => ({ kind: "output" as const, text })));
      return;
    }

    if (command === "pwd") {
      appendLines([{ kind: "output", text: promptPath }]);
      return;
    }

    if (command === "ls") {
      appendLines([
        {
          kind: "output",
          text: routeNames.join("  "),
        },
      ]);
      return;
    }

    if (command === "cat") {
      if (!arg) {
        appendLines([{ kind: "output", text: "usage: cat <route|routes>" }]);
        return;
      }

      const target = arg.toLowerCase();

      if (target === "routes") {
        appendLines(
          routeNames.map((name) => ({
            kind: "output" as const,
            text: `${name.padEnd(8, " ")} ${routeMap[name]}`,
          })),
        );
        return;
      }

      if (target in routeSummaries) {
        appendLines(
          routeSummaries[target as keyof typeof routeSummaries].map((text) => ({
            kind: "output" as const,
            text,
          })),
        );
        return;
      }

      appendLines([{ kind: "output", text: `unknown target: ${arg}` }]);
      return;
    }

    if (command === "cd" || command === "open") {
      if (!arg) {
        appendLines([
          { kind: "output", text: `usage: ${command} <route>` },
        ]);
        return;
      }

      const nextTarget =
        arg === ".." || arg === "~" || arg === "/" ? "home" : arg.toLowerCase();

      if (nextTarget in routeMap) {
        navigateTo(nextTarget as keyof typeof routeMap);
        return;
      }

      appendLines([
        { kind: "output", text: `unknown route: ${arg}` },
      ]);
      return;
    }

    appendLines([
      { kind: "output", text: `command not found: ${command}` },
    ]);
  }

  return (
    <div className="footer-terminal">
      <div className="footer-terminal-header">
        <div className="site-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="footer-terminal-title">soundadam-shell</p>
        <p className="footer-terminal-path">{promptPath}</p>
      </div>

      <div ref={bodyRef} className="footer-terminal-body">
        {history.map((line, index) => (
          <p
            key={`${line.kind}-${index}`}
            className={`footer-terminal-line footer-terminal-line-${line.kind}`}
          >
            {line.text}
          </p>
        ))}
        <form
          className="footer-terminal-form"
          onSubmit={(event) => {
            event.preventDefault();
            runCommand(input);
            setInput("");
          }}
        >
          <label className="footer-terminal-prompt" htmlFor="footer-terminal-input">
            {promptPath} $
          </label>
          <input
            id="footer-terminal-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="footer-terminal-input"
            placeholder="ls"
          />
        </form>
      </div>
    </div>
  );
}
