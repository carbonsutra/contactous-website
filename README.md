# Contactous

Contactous product catalogue and documentation site, built with Zudoku. The navigation is organized around **APIs**, **Solutions**, and **Playground**, based on the supplied layout reference.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`. Set `API_URL` to a confirmed backend URL when one is available.

## Build

```bash
npm run build
```

## Project structure

- `zudoku.config.tsx` — site metadata and navigation
- `pages/apis/` — product overview pages
- `pages/solutions/` — audience/industry solution pages
- `pages/playground.mdx` — sample workflow guide
- `apis/Contactous-openapi.yaml` — OpenAPI catalogue with clearly marked demo operations
- `src/components/` — reusable site components retained from the starter project

**Important:** Product pages and OpenAPI operations generated for this redesign contain illustrative dummy data. The OpenAPI server defaults to `https://api.example.com`; replace it with a verified API base URL and real schemas before presenting the reference as a live API.
