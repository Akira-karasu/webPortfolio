# webPortfolio

A personal portfolio website built with Vue 3 and Vite for showcasing professional background, technical skills, projects, education, and contact information.

## Overview

This project is a single-page portfolio designed to present a developer profile in a modern, clean, and visually engaging way. It focuses on a strong landing experience while keeping content easy to maintain through data-driven files.

## Features

- Responsive, modern portfolio layout
- Hero section with profile overview
- About, skills, projects, certificates, and contact sections
- Reusable UI components and layout blocks
- Smooth scroll and reveal animations using AOS
- Data-driven content for projects, education, technologies, and contacts
- Fast development workflow with Vite
- Production build support via Vite

## Tech Stack

- Vue 3
- Vite
- JavaScript
- Tailwind CSS
- AOS
- ESLint
- Oxlint

## Project Structure

```bash
webPortfolio/
├── public/
│   ├── images/
│   │   ├── certificates/
│   │   ├── icons/
│   │   ├── logo/
│   │   ├── picture/
│   │   └── projects/
│   └── resume/
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── assets/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── composables/
│   └── data/
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── vite.config.js
└── .gitignore
```

## Content Customization

Most portfolio content is stored under the `src/data` folder. You can update:

- personal projects
- skill lists
- education history
- work experience
- contact links
- certificate entries

This makes it easy to keep the portfolio up to date without changing the structure of the UI.

## Notes

This portfolio is tailored for a personal developer brand and can be extended with additional sections such as:

- resume download link
- testimonials
- blog articles
- certifications showcase
- contact form integration

## License

This project is intended for personal portfolio use. If you plan to reuse or adapt it for public deployment, make sure you review and update licensing and ownership details as needed.
