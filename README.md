# Node App Template

A GitHub template repo for node apps

[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/voxpelli/node-app-template)

## About This Template

This template is designed for **creating Node.js apps and services**.

**When to use this template:**
- Building web servers and REST APIs
- Creating workers and long-running app processes
- Developing service-style Node.js applications

**Related templates:**
- **[node-cli-template](https://github.com/voxpelli/node-cli-template)** - For command-line tools and CLI applications
- **[node-module-template](https://github.com/voxpelli/node-module-template)** - For reusable npm libraries and utilities

**For detailed coding guidelines and GitHub Copilot instructions**, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## Install

Clone the repo and install dependencies:

```sh
npm ci
```
## Testing

This template uses two complementary test layers:

- **Runtime tests** in `test/*.spec.js` using `node:test` and `node:assert/strict`
- **Type-level tests** in `typetests/*.tst.ts` using `tstyche`

Useful commands:

- `npm test` – full verification flow
- `npm run test:node` – runtime tests with c8 coverage
- `npm run check-type-tests` – type-level contract tests

## Git Hooks

Husky is opt-in in this template.

- `npm run husky-enable` – enable git hooks
- `npm run husky-disable` – disable git hooks

## Lockfile Policy

This app template keeps `package-lock.json` committed.

## Usage

Start the app:

```sh
npm run dev
```

## Similar modules

* [`example`](https://example.com/) – is similar in this way

## See also

* [Announcement blog post](#)
* [Announcement tweet](#)
