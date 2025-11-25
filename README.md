# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Frontend Mentor - FAQ accordion solution

## Table of contents

- [Overview](#overview)
- [Goal](#goal)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
- [Lessons](#lessons)
- [Development](#development)
- [Useful resources](#useful-resources)

## Overview

This challenge uses a common front-end pattern, the accordion and some minimal JS to update dynamic content.

## Goal

My goal here is to continue with FM challenges that include basic JS, with the ambition to bridge the gap between my foundational knowledge and that required for a full-stack challenge.

## Outcome

![](/design/mobile-design.jpg)
![](/design/desktop-screenshot.png)

:jigsaw: [Live Site URL](https://i000o.github.io/faq-accordion/)  
:pencil2: [Solution URL]()

## Built with

- Semantic HTML5 markup
- CSS
- Mobile-first workflow
- Sass

## Process

- Mobile-first design. Using flex.
- JS: used AI first - frustrating, then moved to research. Found [How to Create a Collapsible](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible) on W3Schools which was helpful. I followed that as a template.
- `button` is an array here?
- Found `hsl(281, 83%, 54%)` from Illustrator file SVG.
- I think the `h2` is included in the `button` element. The whole area is clickable, not just the icon itself...
- I had swapped out the `<header>` bg-img for a `<picture>` element, and then learnt that semantically, that doesn't make sense, so switched it back and used media queries to swap out the bg into the desktop-version and used `background-size: cover;` to make it cover the whole width of the viewport.
- I could not get the JS to work on my own! AI suggested alternative methods, but I feel this technique should work and after debugging attemptes, cannot figure out why it's not. Hoping the community on FM can help me.

## Lessons

1. JS - `console.log(this.parentElement.nextSiblingElement)` returned `cannot read properties of undefined nextSiblingElement`.
2. JS - `console.log(this.parentElement)` returned `undefined`.

## Development

- I don't know what `this` keyword means.
- For my next challenge, I'd love to try Tailwind for the first time. I enjoy Sass, but am ready for a step-up.

## Useful resources

1. [How to Create a Collapsible](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible)

# faq-accordion
