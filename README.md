# my-site

A portfolio built with Vue, TypeScript, and Vite.

## Development

Install [Bun](https://bun.sh/docs/installation).

```sh
bun install --frozen-lockfile
bun run dev
```

Use `bun run type-check` to check the Vue app and Vite config without bundling.

## Environment

The site needs no environment variables. Vite handles `.env` loading, including `.env.local` and mode-specific overrides. Bun's automatic `.env` loading is disabled in `bunfig.toml` to preserve Vite's precedence. If you add public build-time settings, prefix them with `VITE_` and document them in a committed `.env.example`. Anything exposed through `VITE_` is public.

## Build and deployment

```sh
bun run build
bun run preview
```

The build type-checks the project and writes the production site to `dist/`.

To build with Docker and export the site directly to `dist/` on your host, run this from the project root:

```sh
docker buildx build --target dist --output type=local,dest=./dist .
```

Use an empty output directory for a clean export: Docker overwrites matching files but does not remove stale ones.
