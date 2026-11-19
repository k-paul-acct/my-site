FROM docker.io/oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM scratch AS dist
COPY --from=build /app/dist/ /
