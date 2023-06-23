# Anchor-to

The Anchor-to package provides functionality for smooth scrolling to anchor elements on a web page, including scrolling to a target element specified in the URL.

[Here's an example](https://team-thunderfoot.github.io/anchor-to/dist/index.html)

## Installation

```sh
npm install @teamthunderfoot/anchor-to
```

## Usage

#### Option 1: Scroll with Buttons

```sh
import AnchorTo from "@teamthunderfoot/anchor-to"

class Index {
  constructor() {
    this.init();
  }
  init() {
    new AnchorTo({
      trigger: "js--scroll-to",
      checkUrl: false,
      anchorTo: "tf-data-target",
      offsetTopAttribute: "tf-data-distance",
      offsetTop: false,
      offsetTopURL: false,
    });
  }
}

export default Index;
new Index();
```

In your HTML file, include elements with the class `js--anchor-to` and a `data-target` attribute specifying the ID of the anchor element. Optionally, you can add the `tf-data-distance` attribute to set the offset-top from there.

```sh
<a href="#" class="js--anchor-to" data-target="section1" tf-data-distance="50">Scroll to Section 1</a>
```

If the `tf-data-distance` attribute is not provided in the HTML element, the value of the offset-top will be taken from the `offsetTop` variable of the JS class, which can be dynamic and adjusted as needed.

```sh
  new AnchorTo({
    trigger: "js--scroll-to",
    checkUrl: false,
    anchorTo: "tf-data-target",
    offsetTopAttribute: "tf-data-distance",
    offsetTop: 15,
    offsetTopURL: false,
  });
```

```sh
<a href="#" class="js--anchor-to" data-target="section1">Scroll to Section 1</a>
```

In this example of the HTML, since it doesn't have the `tf-data-distance` attribute, it will take the value of the offset top as 15px, which is the value specified in the JS variable.

#### Option 2: Scroll with URL

If you want the package to scroll to a specific anchor element based on the URL, follow this approach:

```sh
import AnchorTo from "./AnchorTo";

class Index {
  constructor() {
    this.init();
  }
  init() {
    new ScrollTo({
      trigger: false,
      checkUrl: true,
      anchorTo: false,
      offsetTopAttribute: "tf-data-distance",
      offsetTop: 15,
      offsetTopURL: 50,
    });
  }
}

export default Index;
new Index();
```

If the URL contains a hash value (e.g., https://example.com?section2), the package will automatically scroll to the element with the matching ID specified in the URL.

#### Option 3: Combined Usage

You can also combine both options to scroll with buttons and handle URL-based scrolling simultaneously:

```sh
import AnchorTo from "./AnchorTo";

class Index {
  constructor() {
    this.init();
  }
  init() {
    new AnchorTo({
      trigger: "js--scroll-to",
      checkUrl: true,
      anchorTo: "tf-data-target",
      offsetTopAttribute: "tf-data-distance",
      offsetTop: 15,
      offsetTopURL: 100,
    });
  }
}

export default Index;
new Index();
```

## Options

When initializing the AnchorTo class, you can provide several options to customize its behavior. Here's an explanation of each option:

• `trigger:` This option specifies the class name of the buttons or elements that trigger the scroll action. For example, if you set `trigger: "js--scroll-to"`, it will target elements with the class "js--scroll-to" as the triggers for scrolling.

• `checkUrl:` This option determines whether the package should check the URL for a hash value and scroll to the corresponding element. If set to `true`, it will enable URL-based scrolling. If set to `false`, URL-based scrolling will be disabled.

• `anchorTo:` This option specifies the attribute used to identify the target element to scroll to. It must be an id of the element.

• `offsetTopAttribute:` This option specifies the attribute used to determine the offset distance for scrolling. If the attribute is present in the HTML element, its value will be used as the offsetTop. If the attribute is not present, the offset top value will be taken from the `offsetTop` variable of the JS class.

• `offsetTop:` This option allows you to specify an additional vertical scroll offset in pixels. It adjusts the final scroll position, but its value will be taken into account only if the `tf-data-distance` attribute is not present in the HTML element. If the `tf-data-distance` attribute is present, the value of the `offsetTop` option will be ignored and the offset will be determined by the attribute's value.

• `offsetTopURL:` This option defines the vertical scroll offset applied when scrolling to an anchor element specified in the URL. It is useful when you want to add an additional offset.
