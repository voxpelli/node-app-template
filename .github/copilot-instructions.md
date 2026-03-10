# GitHub Copilot Instructions for Node App Template

## Related Templates (Choose the Right Template First)

This repository is a **GitHub Template Repo** for Node.js apps and services.

| If you are building… | Pick this template |
|---|---|
| Web APIs, workers, long-running services | [`node-app-template`](https://github.com/voxpelli/node-app-template) |
| Command-line tools and terminal workflows | [`node-cli-template`](https://github.com/voxpelli/node-cli-template) |
| Reusable libraries published for import | [`node-module-template`](https://github.com/voxpelli/node-module-template) |

Default behavior in this repo: proceed in **app/service mode**.

## Fast Path

- Use **ESM only** (`import` / `export`)
- Keep implementation in `lib/` and thin execution in `index.js`
- Write runtime tests in `test/*.spec.js` with `node:test` + `node:assert/strict`
- Write type tests in `typetests/*.tst.ts` with `tstyche`
- Validate with `npm test` before finalizing

## Commands

- `npm run dev` - run the app in watch mode
- `npm start` - run the app once
- `npm run test:node` - runtime tests with coverage
- `npm run check-type-tests` - type-level tests
- `npm test` - full checks + tests

## Guardrails

### MUST

- Keep changes minimal and template-focused
- Update tests when behavior changes
- Keep docs aligned with actual scripts

### ASK FIRST

- Runtime dependency changes
- Public API shape changes
- Large file moves or broad refactors

### NEVER

- Introduce CommonJS runtime code
- Claim validation without running it
- Leave template docs with stale commands
