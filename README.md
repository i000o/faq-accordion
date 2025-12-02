# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Frontend Mentor - FAQ accordion solution

## Table of contents

- [Overview](#overview)
- [Goal](#goal)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
- [Feedback](#feedback)
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
:pencil2: [Solution URL](https://www.frontendmentor.io/solutions/faq-accordion-with-js-collapsible-uBGpFZ4JfN)

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

## Feedback

After sharing this solution with other devs (with the bug), I noticed that junior devs couldn't really help me. They suggested other ways to achieve the same thing, but couldn't tell me why this way wasn't working if all seemed theoretically fine. I sent an email to a more experienced developer and they were able to give me a prompt, precise explanation for why this wasn't working and suggested a simple way to fix it with clear explanations; **It was a scope issue. I was asking JS to find variables globally that were locally scoped within a callback function, so the JS was never executed.** I understand now that:

1. JS will execute global script first, so in this instance, my `console.log()` statements referenced nothing that existed gloablly, so this threw an 'Uncaught Error' and interrupted the whole script from running.
2. I know that if you place the `<script>` inside `<head>`, it will execute before any of the `HTML` is parsed. That means that oftentimes, without a `DOMContentLoaded` method, your script will run and try to reference your HTML before it's loaded, so you need to pay attention to this. It's different if `<script>` is at the bottom of the `HTML` doc.

Once I simply changed these `console.log()` statements placement in the document, everything worked fine. I find that sometimes the trickiest bugs have the simplest solutions and usually expose some area of your understanding where you are overlooking some fundamentals. It's really important to me that my foundational knowledge as a programmer is robust, because I know these are the principles I will rely on constantly as I go.

Another thing to note, AI couldn't detect this! - It would only suggest me other techniques to use to rewrite the code block, say using the `.closest` method. But I knew this way _should_ work, and there should be an explanation as to why - It couldn't deliver. I don't want to rely on AI to think for me while I code. I want to understand well what it is I am doing.

## Development

- I don't know what `this` keyword means.
- For my next challenge, I'd love to try Tailwind for the first time. I enjoy Sass, but am ready for a step-up.
- I need to pay attention to scope more and understand why a couple of `console.log()` statements in the wrong place can cause an entire script not to execute.
- Rely on your own research more than AI! Don't use it as a crutch, although it's tempting.
- I wasn't able to make the `h2` clickable as the button is. I didn't know the best way to go about this without disrupting my initial design which worked well. I'd like to gain confidence here and be sure to include this in a commit later on.
- I'd like to be able to use the CSS `transition` property. I've used it briefly in the past, but wasn't able to get it to work here. Again, my understanding of theses and animations is very limited and it's certainly an area I can build on later. For now, I'm focused on establishing strong programming fundamentals, but I think these touches can really elevate designs.

## Useful resources

1. [How to Create a Collapsible](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible)

# faq-accordion
