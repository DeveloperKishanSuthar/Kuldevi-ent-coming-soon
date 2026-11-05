# Kuldevi Enterprise And Wood Works — Coming Soon

A responsive React + Vite landing page with a purple industrial theme, the supplied company logo, animated machine-inspired artwork, and a website development progress indicator.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Extract this project and open the folder in VS Code.
3. Open a terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Publish to GitHub

1. Create a new empty repository on GitHub.
2. Upload the contents of this project folder (not the ZIP file itself), or run:

   ```bash
   git init
   git add .
   git commit -m "Add Kuldevi coming soon website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

## Deploy

You can import the GitHub repository into Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory.

## Customize

- Replace `public/kuldevi-logo.png` to change the logo.
- Edit the company services in `src/main.jsx`.
- Change the theme and layout in `src/styles.css`.
- The progress bar is a visual, illustrative indicator (65%), not a live deployment tracker. Update its width and the stage labels when your actual project status changes.
- Update the email address in the footer in `src/main.jsx` before publishing.
