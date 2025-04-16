# Astro Demo

This repo is the result of my learning process of using the Astro framework.
The goal is to generate a static website. I will document all the operations done below.

## What have I done

```sh
npm create astro@latest
npm run astro add svelte
npm run astro add tailwind
```

- Replaced some assets
- Edited `Welcome.astro` `Layout.astro`
- Added a workflow to automatic deploy
- Changed `site` and `base` in `astro.config.mjs`

```sh
npm install dotenv -D
```

- Installed dotenv to use the environment variables in `astro.config.mjs`
- Now, the `base` path could work in both `.astro` and `.mjs`

```powershell
# build in powershell
$env:PUBLIC_BASE_URL='astro-demo/'; npm run build
```

- Add prettier.

```sh
npm install -D prettier prettier-plugin-astro
```

- Create `.prettierrc`, `.prettierignore`
- add `"format": "prettier --write ."` in `package.json`
- `npm run format` works now.

After that, added more content.

```sh
npm install --save-dev cross-env
```

- Use `cross-env` for cross platform environment variable setting in `package.json`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
