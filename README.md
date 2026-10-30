# Imran — Next.js Portfolio

Responsive Next.js App Router portfolio using JavaScript/JSX and custom CSS. All professional content comes from the supplied CV. Visuals are labelled interface concepts, not actual project screenshots.

## Windows quick start
Extract the imran-portfolio folder onto your Desktop. Install Node.js 20.9 or newer, open this folder in VS Code, then run in its terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build
Run `npm run build`. The static website is generated in `out/`. Deploy that folder to a static host, or import this project into Vercel with its Next.js preset.

## Edit content
- `lib/data.js`: contact details, projects, skills, experience.
- `components/Portfolio.jsx`: page sections and interactions.
- `app/globals.css`: theme and responsive styling.
- `app/layout.jsx`: page title and metadata.
- `public/Imran-CV.pdf`: downloadable CV.

Contact links launch an email or phone application; there is no email backend or simulated form submission. Project buttons open contribution details.
