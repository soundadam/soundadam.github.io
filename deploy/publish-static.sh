#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET="${1:-}"

if [[ -z "$TARGET" ]]; then
  echo "usage: ./deploy/publish-static.sh user@server:/srv/www/soundadam/current/" >&2
  exit 1
fi

cd "$ROOT_DIR"

pnpm install --frozen-lockfile
pnpm build

rsync -av --delete out/ "$TARGET"
