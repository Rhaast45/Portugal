# Michael Ortinero — IT Portfolio

A responsive, single-page portfolio showcasing my IT background, technical skills, projects, troubleshooting knowledge, and career development.

## Live Site

[View the portfolio](https://rhaast45.github.io/Port-Santiago)

## Portfolio Sections

- **Profile and technical skills** — Background, skills inventory, and self-assessed proficiency levels.
- **Featured projects and certifications** — Selected work, credentials, and resume.
- **Troubleshooting portfolio** — Scenario-based diagnostic procedures for common hardware, Windows, network, and printer issues.
- **Cybersecurity case study** — SQL injection risks and defensive practices, including parameterized queries and least privilege.
- **AI usage log** — Examples of AI-assisted portfolio work, what was checked, and verification limitations.
- **Employability and interview readiness** — A playable behavioral mock-interview recording, a silent looping technical-interview animation, interview preparation, and a project-defense outline.
- **Career plan and reflection** — Career goals and academic reflection.
- **Experience and FAQ** — Professional experience, availability, and contact information.

## Responsive Experience

The interface adapts to desktop and mobile screens. On narrow screens, content grids collapse into a single column, panels and headings reflow, and mobile navigation controls are used. The Projects section also features a scroll-triggered loading and shutter transition.

## Built With

- HTML5 and CSS3
- Vanilla JavaScript
- GSAP and ScrollTrigger for animation
- Lenis for smooth scrolling
- Three.js for visual effects
- Google Fonts and a locally bundled display font

## Project Structure

```text
.
├── index.html
├── profile.html
├── projects.html
├── style.css
├── js/
│   ├── portal-animation.js
│   ├── scroll.js
│   └── vendor/
├── assets/
│   ├── documents/
│   ├── fonts/
│   ├── images/
│   └── videos/
└── README.md
```

The portfolio is primarily served from `index.html`. Styles, scripts, fonts, images, documents, and interview media are stored in their respective folders under `assets/` and `js/`.

## Run Locally

No build step or package installation is required. Open `index.html` in a browser, or serve the repository root with a local static web server. Serving over HTTP is recommended for checking media playback and browser features.

## Author

**Michael Ortinero** · GitHub: [@Rhaast45](https://github.com/Rhaast45)
