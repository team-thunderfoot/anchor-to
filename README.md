# Anchor-to

NPM Package : Anchor To Section
[![npm version](https://badge.fury.io/js/scroll-to.svg)](https://badge.fury.io/js/scroll-to)

The `anchor-to` library provides functionality for smooth scrolling to anchor elements on a web page.

## Installation

```sh
npm install anchor-to
```

## Usage

```sh
import ScrollTo from 'scroll-to';

const anchorButtons = document.querySelectorAll(".js--anchor-to");

anchorButtons.forEach((button) => {
  const scrollTo = new ScrollTo({
    anchorTo: document.getElementById(button.dataset.target),
    offsetTop: 100,
  });

  button.addEventListener("click", (e) => {
    scrollTo.anchorTo(e);
  });
});
```

## Options

• `anchorTo:` DOM element to scroll smoothly to.
• `offsetTop:` Additional vertical scroll offset.
