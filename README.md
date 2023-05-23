# Anchor-to

NPM Package : Anchor To Section

[![npm version](https://badge.fury.io/js/scroll-to.svg)](https://badge.fury.io/js/scroll-to)

The `anchor-to` library provides functionality for smooth scrolling to anchor elements on a web page, including scrolling to a target element specified in the URL.

## Installation

```sh
npm install @teamthunderfoot/anchor-to
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

In your HTML file, include elements with the class "js--anchor-to" and a data-target attribute specifying the ID of the anchor element.

```sh
<a href="#" class="js--anchor-to" data-target="section1">Scroll to Section 1</a>
```

If the URL contains a hash value (e.g., https://example.com/#section2), the package will automatically scroll to the element with the matching ID specified in the URL.

## Options

• `anchorTo:` DOM element to scroll smoothly to.
• `offsetTop:` Additional vertical scroll offset.
