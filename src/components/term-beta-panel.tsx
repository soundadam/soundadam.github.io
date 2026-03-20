"use client";

import { FitAddon } from "@xterm/addon-fit";
import { Terminal } from "@xterm/xterm";
import { useEffect, useRef, useState } from "react";

const ENDPOINT_KEY = "soundadam-term-endpoint-v1";

type ConnectionState = "idle" | "connecting" | "connected" | "disconnected" | "error";
type SiteTheme = "sand" | "ubuntu" | "night";

function defaultEndpoint() {
  if (typeof window === "undefined") {
    return "";
  }

  const fromQuery = new URLSearchParams(window.location.search).get("ws");
  if (fromQuery) {
    return fromQuery;
  }

  const stored = window.localStorage.getItem(ENDPOINT_KEY);
  if (stored) {
    return stored;
  }

  const scheme = window.location.protocol === "https:" ? "wss" : "ws";
  return `${scheme}://${window.location.host}/api/term/socket`;
}

function resolveTheme(theme: SiteTheme) {
  switch (theme) {
    case "ubuntu":
      return {
        background: "#300a24",
        foreground: "#f2f2ef",
        cursor: "#dbded8",
        cursorAccent: "#300a24",
        selectionBackground: "#723862",
        black: "#2e3436",
        red: "#cc0000",
        green: "#4e9a06",
        yellow: "#c4a000",
        blue: "#3465a4",
        magenta: "#75507b",
        cyan: "#06989a",
        white: "#d3d7cf",
        brightBlack: "#555753",
        brightRed: "#ef2929",
        brightGreen: "#8ae234",
        brightYellow: "#fce94f",
        brightBlue: "#729fcf",
        brightMagenta: "#ad7fa8",
        brightCyan: "#34e2e2",
        brightWhite: "#eeeeec",
      };
    case "night":
      return {
        background: "#111923",
        foreground: "#e8eef5",
        cursor: "#d2ddeb",
        cursorAccent: "#111923",
        selectionBackground: "#213247",
        black: "#111923",
        red: "#d8718a",
        green: "#7fb9be",
        yellow: "#a7bfce",
        blue: "#78a9ff",
        magenta: "#9aa8ff",
        cyan: "#80d4e3",
        white: "#cfd8e3",
        brightBlack: "#4d5c6f",
        brightRed: "#ff95ae",
        brightGreen: "#96d5c9",
        brightYellow: "#d5e4ff",
        brightBlue: "#a1c5ff",
        brightMagenta: "#c0c4ff",
        brightCyan: "#a6edf8",
        brightWhite: "#f3f7fc",
      };
    default:
      return {
        background: "#2f1f26",
        foreground: "#f4efe8",
        cursor: "#efe7de",
        cursorAccent: "#2f1f26",
        selectionBackground: "#62404c",
        black: "#3b2e2c",
        red: "#b7634a",
        green: "#708f6c",
        yellow: "#d3aa53",
        blue: "#7f92b8",
        magenta: "#9c6f8f",
        cyan: "#6d9697",
        white: "#f4efe8",
        brightBlack: "#7a6d66",
        brightRed: "#d98565",
        brightGreen: "#8dab83",
        brightYellow: "#ebc87b",
        brightBlue: "#9ab2d9",
        brightMagenta: "#bb8dad",
        brightCyan: "#8bb5b7",
        brightWhite: "#fffaf5",
      };
  }
}

function currentTheme(): SiteTheme {
  if (typeof document === "undefined") {
    return "sand";
  }

  const value = document.documentElement.dataset.theme;
  return value === "ubuntu" || value === "night" ? value : "sand";
}

export function TermBetaPanel() {
  const shellRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const connectionStateRef = useRef<ConnectionState>("idle");
  const hasWarnedOfflineRef = useRef(false);
  const [endpoint, setEndpoint] = useState(defaultEndpoint);
  const [status, setStatus] = useState<ConnectionState>("idle");
  const [themeName, setThemeName] = useState<SiteTheme>(currentTheme);

  function setConnectionState(next: ConnectionState) {
    connectionStateRef.current = next;
    setStatus(next);
    if (terminalRef.current) {
      terminalRef.current.options.disableStdin = next !== "connected";
    }
  }

  function writeBootstrapLines() {
    const terminal = terminalRef.current;
    if (!terminal) {
      return;
    }

    terminal.writeln("adam@cabo beta terminal");
    terminal.writeln("target: xterm.js -> websocket -> pty -> containerized codex");
    terminal.writeln("host shell access is intentionally out of scope");
    terminal.writeln("");
  }

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || terminalRef.current) {
      return;
    }

    const terminal = new Terminal({
      allowProposedApi: false,
      convertEol: true,
      cursorBlink: true,
      cursorStyle: "block",
      drawBoldTextInBrightColors: true,
      fontFamily: 'var(--font-mono), "Ubuntu Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: 15,
      letterSpacing: 0,
      lineHeight: 1.22,
      scrollback: 1600,
      theme: resolveTheme(currentTheme()),
      disableStdin: true,
    });

    const fitAddon = new FitAddon();
    fitAddonRef.current = fitAddon;
    terminal.loadAddon(fitAddon);
    terminal.open(shell);
    fitAddon.fit();
    terminal.focus();
    terminalRef.current = terminal;
    writeBootstrapLines();

    const dataDisposable = terminal.onData((data) => {
      const socket = socketRef.current;
      if (!socket || socket.readyState !== WebSocket.OPEN) {
        if (!hasWarnedOfflineRef.current) {
          hasWarnedOfflineRef.current = true;
          terminal.writeln("backend unavailable: attach a sandboxed websocket target first");
          terminal.writeln("expected path: /api/term/socket");
          terminal.writeln("");
        }
        return;
      }

      hasWarnedOfflineRef.current = false;
      socket.send(data);
    });

    const resizeObserver = new ResizeObserver(() => {
      fitAddon.fit();
    });
    resizeObserver.observe(shell);

    const themeObserver = new MutationObserver(() => {
      const nextTheme = currentTheme();
      setThemeName(nextTheme);
      terminal.options.theme = resolveTheme(nextTheme);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      dataDisposable.dispose();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      socketRef.current?.close(1000, "route teardown");
      terminal.dispose();
      terminalRef.current = null;
      fitAddonRef.current = null;
    };
  }, []);

  function connect() {
    const terminal = terminalRef.current;
    const fitAddon = fitAddonRef.current;

    if (!terminal || !endpoint) {
      return;
    }

    socketRef.current?.close(1000, "manual reconnect");
    socketRef.current = null;
    terminal.writeln(`connecting to ${endpoint}`);
    setConnectionState("connecting");

    const socket = new WebSocket(endpoint);
    socketRef.current = socket;

    socket.addEventListener("open", () => {
      window.localStorage.setItem(ENDPOINT_KEY, endpoint);
      setConnectionState("connected");
      fitAddon?.fit();
      terminal.focus();
      terminal.writeln("transport ready");
    });

    socket.addEventListener("message", (event) => {
      if (typeof event.data === "string") {
        terminal.write(event.data);
        return;
      }

      if (event.data instanceof ArrayBuffer) {
        terminal.write(new TextDecoder().decode(event.data));
      }
    });

    socket.addEventListener("close", (event) => {
      socketRef.current = null;
      const nextState = connectionStateRef.current === "error" ? "error" : "disconnected";
      setConnectionState(nextState);
      terminal.writeln("");
      terminal.writeln(`transport closed (${event.code})`);
    });

    socket.addEventListener("error", () => {
      setConnectionState("error");
      terminal.writeln("");
      terminal.writeln("transport error");
    });
  }

  function disconnect() {
    socketRef.current?.close(1000, "manual disconnect");
    socketRef.current = null;
    setConnectionState("disconnected");
    terminalRef.current?.writeln("");
    terminalRef.current?.writeln("detached from backend");
  }

  function resetViewport() {
    const terminal = terminalRef.current;
    if (!terminal) {
      return;
    }

    terminal.reset();
    terminal.clear();
    writeBootstrapLines();
    if (status !== "connected") {
      terminal.writeln("status: disconnected");
      terminal.writeln("");
    }
  }

  function statusLabel() {
    switch (status) {
      case "connecting":
        return "Connecting";
      case "connected":
        return "Attached";
      case "disconnected":
        return "Detached";
      case "error":
        return "Error";
      default:
        return "Idle";
    }
  }

  return (
    <section className="term-beta-grid">
      <div className="term-beta-meta article-card rounded-[24px] p-5 sm:p-6">
        <p className="footer-command">Sandbox target</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-text)]">
          Container-only Codex bridge.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-[0.96rem]">
          This page is for the real terminal route only. The footer shell stays pseudo and read-only. The backend should live on the Ubuntu server as <code>WebSocket -&gt; PTY -&gt; containerized Codex</code>, never as a direct bridge to the host login shell.
        </p>
        <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
          <p>
            route: <span className="font-mono text-[var(--color-text)]">/term</span>
          </p>
          <p>
            websocket: <span className="font-mono text-[var(--color-text)]">{endpoint || "unset"}</span>
          </p>
          <p>
            theme: <span className="font-mono text-[var(--color-text)]">{themeName}</span>
          </p>
          <p>
            safety: <span className="font-mono text-[var(--color-text)]">container workspace only</span>
          </p>
        </div>
      </div>

      <div className="term-beta-shell">
        <div className="term-beta-toolbar">
          <div className="site-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="term-beta-toolbar-title">adam@cabo beta</p>
          <span className={`term-beta-status term-beta-status-${status}`}>
            {statusLabel()}
          </span>
        </div>

        <div className="term-beta-controls">
          <label className="term-beta-endpoint-shell">
            <span className="term-beta-endpoint-label">ws</span>
            <input
              className="term-beta-endpoint-input"
              type="text"
              inputMode="url"
              value={endpoint}
              onChange={(event) => setEndpoint(event.target.value)}
              placeholder="ws://127.0.0.1:8787/api/term/socket"
              spellCheck={false}
            />
          </label>
          <div className="term-beta-actions">
            <button className="term-beta-button term-beta-button-primary" type="button" onClick={connect}>
              connect
            </button>
            <button className="term-beta-button" type="button" onClick={disconnect}>
              detach
            </button>
            <button className="term-beta-button" type="button" onClick={resetViewport}>
              reset
            </button>
          </div>
        </div>

        <div className="term-beta-viewport">
          <div ref={shellRef} className="term-beta-screen" />
        </div>
      </div>
    </section>
  );
}
