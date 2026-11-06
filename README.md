# Nabhay's portfolio

Static HTML/CSS/JavaScript pages with a JavaScript Vercel Function at `/api/projects`.
The API is read-only project metadata; it does not send emails or store submissions.
The website remains usable independently of the API.

## Build

Use Node.js 24 and run `npm run build`. Only the explicit website files and optional
`assets/` folder are copied into `public/`; local environment files are excluded.
Edit the root HTML/CSS/JS files, not generated files inside `public/`.

## Deploy to Vercel

From this directory:

```powershell
npx vercel login
npx vercel
```

Choose your account, create a project named `nabhay-portfolio` (or your preferred
name), and use the current directory. The configuration supplies build and output
settings. Inspect the preview, then publish:

```powershell
npx vercel --prod
```

Alternatively, push the source to GitHub and import the repository in Vercel.
Use framework preset **Other**; the checked-in configuration supplies the build
command and output directory. No environment variables are required.

Check `/`, `/work`, `/journey`, `/resume`, `/api/projects`, and the resume download
after deployment. Clean URLs redirect existing `.html` links automatically.
For local Vercel routing and API development, run `npx vercel dev`.

Add future event photos and project graphics under `assets/`. Set project website
URLs in `api/projects.js` when available and add their links to `work.html`.
