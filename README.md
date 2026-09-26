# Likhith Yedida | Data Analyst Portfolio

A cinematic, black-and-gold portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit your content

All personal content (headline, bio, stats, projects, skills, experience, links) lives in one file:

```
src/data/profile.ts
```

Change text, numbers or links there and the whole site updates. You don't need to touch the components.

| What | Where |
|---|---|
| Headshot | `src/assets/headshot.png` (transparent background) |
| Resume download | `public/Likhith_Yedida_Resume.pdf` |
| Favicon | `public/favicon.svg` |
| Hero data animation | `src/components/DataFieldCanvas.tsx` |

## Deploy (free)

**Vercel:** push this folder to a new GitHub repo, import it at vercel.com, and keep the defaults (framework: Vite, build: `npm run build`, output: `dist`).

**Netlify:** same idea. Build command `npm run build`, publish directory `dist`.

## Contact form

The form has no backend. It opens the visitor's email app with the message pre-filled to the address in `profile.ts`.
