# Relatable style guide

## About

This is a place for building out the visual elements of Relatable websites. 

It is a NextJs application with components modelled as React components.

The base styles are provided by [Tailwind](https://tailwindcss.com/) with the [DaisyUi](https://daisyui.com/) component library. 

## Pre-requisites

- Node package manager (e.g. npm)

## Getting started

- Clone this repo
- Change directory to _/source_
- Install dependencies (e.g. `npm install`)
- Run in dev mode (e.g. `npm run dev`)
- Browse to http://localhost:3000 (or other port if 3000 is taken - refer to console output)

## Making changes

Changes can be made in the following locations. While the app is running it will detect any changes made and these will be reflected immediately in the browser.

- [./source/tailwind.config.ts](./source/tailwind.config.ts)
    - A file for [configuring and customising](https://tailwindcss.com/docs/configuration) your Tailwind installation
- [./source/styles/multi-family-project.css](./source/styles/multi-family-project.css) 
    - CSS file which applies the [Tailwind normalisation](https://tailwindcss.com/docs/preflight) and lets us apply our own default styles for HTML elements
- [./source/app/components](./source/app/components)
    - A parent directory for page components
- [./source/app/layout.jsx](./source/app/layout.jsx)
    - Layout elements that serve as containers for all pages
- [./source/app/page.jsx](./source/app/page.jsx)
    - An example page to showcase all components (we may add other example pages later)
