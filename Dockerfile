# ---- build ----
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---- runtime (static server) ----
FROM caddy:2-alpine
WORKDIR /srv
COPY --from=build /app/dist ./dist

# Caddy serves static files on :80 by default in Coolify behind its proxy
COPY <<EOF /etc/caddy/Caddyfile
:80
root * /srv/dist
file_server
EOF
