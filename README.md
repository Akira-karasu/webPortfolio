# webPortfolio

A responsive personal portfolio website built with Vue 3 and Vite. The project presents a developer profile with a hero section, about information, skills, featured projects, and contact details.

## Overview

This portfolio is designed as a modern single-page application for showcasing:

- personal branding and introduction
- technical skills and tools
- project experience with links and descriptions
- education and work background
- contact information and social links

The site uses a data-driven structure, making it easy to update content without modifying layout components repeatedly.

## Features

- Responsive layout for desktop and mobile devices
- Smooth scroll and reveal animations
- Reusable UI components
- Structured data files for projects, skills, and contact details
- Lightweight Vite setup for fast local development
- Clean project architecture for future expansion

## Tech Stack

- Vue 3
- Vite
- JavaScript
- Tailwind CSS
- AOS animation library
- ESLint and Oxlint

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
└── public/
```

## License

This project is for personal portfolio use. If you plan to reuse or adapt it, please check the project owner’s licensing or update the details before publishing publicly.

## Notes

The app currently follows a clean portfolio architecture and is well suited for personal branding, freelancing pages, or a developer portfolio website. It can be expanded with additional sections such as testimonials, certificates, blog posts, or downloadable resume links.
