# Angelo State CS Club Website

Official website for the Computer Science Club at Angelo State University.

🔗 **Live site:** [Angelo-State-CS-Club](https://Angelo-State-CS-Club.github.io/Angelo-State-CS-Club)

---
<!--
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Git](https://git-scm.com/)
- A GitHub account

### Fork or Clone the Repository

**Option A — Fork (recommended for the club's own copy):**

1. Go to the repository on GitHub
2. Click the **Fork** button in the top right
3. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/Angelo-State-CS-Club.git
cd Angelo-State-CS-Club
```

**Option B — Clone directly:**

```bash
git clone https://github.com/soot0-JoshR/Angelo-State-CS-Club.git
cd Angelo-State-CS-Club
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173/Angelo-State-CS-Club/`

---

## Updating Content

All content files are in the `public/` folder. Editing these files does **not** require altering any code and only affects the text content of the website.

### About Text

Edit **`public/about.txt`** to change the text that appears in the Hero section at the top of the page (below the typewriter text).

### Events / Calendar

Edit **`public/events.txt`** to manage upcoming events. Each line follows this format:

```
DATE|TITLE|TIME|LOCATION
```

**Example:**

```
2026-02-22|Guest Speaker - AI in Industry|4:00 PM|MCS 115
2026-03-01|Game Dev Workshop|5:00 PM|MCS 115
```

- Events with past dates are automatically hidden
- Events are sorted chronologically; the top 3 upcoming are displayed
- Use `#` at the start of a line to add comments or temporarily hide an event:

```
# Spring 2026 Events
2026-02-22|Guest Speaker - AI in Industry|4:00 PM|MCS 115
# This one is postponed:
# 2026-03-01|Game Dev Workshop|5:00 PM|MCS 115
```

### Announcements

Edit **`public/announcements.txt`** to display an announcement banner between the About and Events sections.

- **To show an announcement:** Add text to the file
- **To hide the banner:** Clear the file (leave it empty)
- Line breaks in the file are preserved on the page

### Images (Club Highlights Scroller)

Drop image files into **`src/assets/images/`** — they are automatically picked up by the image scroller. No code changes needed.

- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Remove an image file to remove it from the scroller
- Images are sorted alphabetically by filename

---

## Pushing Changes

After making edits:

```bash
git add .
git commit -m "Describe your change here"
git push
```

---

## Deploying to GitHub Pages

### First-Time Setup

1. On GitHub, go to your repository's **Settings → Pages**
2. Set the source to **Deploy from a branch**
3. Set the branch to **`gh-pages`** and folder to **`/ (root)`**

#### Deploying to the CS Club org site (`Angelo-State-CS-Club.github.io`)

If you're deploying to the club's organization site, the repo must be named `Angelo-State-CS-Club.github.io`. Since org sites are served at the root URL (no subpath), update these two files:

- **`vite.config.js`** — set `base` to `"/"`:
  ```js
  base: "/",
  ```
- **`package.json`** — update the `homepage` field:
  ```json
  "homepage": "https://Angelo-State-CS-Club.github.io/"
  ```

The site will be live at `https://Angelo-State-CS-Club.github.io/`

#### Deploying to a project site (`username.github.io/repo-name`)

If you're deploying to a personal or project site instead, the site is served under a subpath matching the repo name. Update these two files:

- **`vite.config.js`** — set `base` to your repo name:
  ```js
  base: "/YOUR-REPO-NAME",
  ```
- **`package.json`** — update the `homepage` field:
  ```json
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
  ```

The site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Deploy

```bash
npm run deploy
```

This will:
1. Build the site (`npm run build`)
2. Push the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will serve it automatically

---

## Project Structure

```
Angelo-State-CS-Club/
├── public/
│   ├── about.txt              # About Us text (also shown in Hero)
│   ├── announcements.txt      # Announcement banner (empty = hidden)
│   └── events.txt             # Upcoming events list
├── src/
│   ├── assets/images/         # Drop images here for the scroller
│   ├── components/
│   │   ├── About.jsx          # About section + layout wrapper
│   │   ├── Announcements.jsx  # Conditional announcement banner
│   │   ├── Calendar.jsx       # Upcoming events display
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Hero.jsx           # Hero/splash with typewriter effect
│   │   ├── ImageScroller.jsx  # Infinite image scroller
│   │   └── Navbar.jsx         # Navigation bar
│   ├── hooks/
│   │   └── useEvents.js       # Event fetching/parsing hook
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── vite.config.js             # Vite config (base path for GH Pages)
└── package.json
```

---

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool & dev server
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [gh-pages](https://www.npmjs.com/package/gh-pages) — GitHub Pages deployment
--!>
