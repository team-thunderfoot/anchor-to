# Anchor-to

The Anchor-to package provides functionality for smooth scrolling to anchor elements on a web page, including scrolling to a target element specified in the URL.

## Installation

```sh
npm install @teamthunderfoot/anchor-to
```

## Usage

#### Option 1: Scroll with Buttons

```sh
import AnchorTo from "./AnchorTo";

class Index {
  constructor() {
    this.init();
  }
  init() {
    new AnchorTo({
      trigger: "js--scroll-to",
      checkUrl: false,
      anchorTo: "tf-data-target",
      offsetTop: "tf-data-distance",
      offsetTopURL: false,
    });
  }
}

export default Index;
new Index();
```

In your HTML file, include elements with the class "js--anchor-to", a data-target attribute specifying the ID of the anchor element and a tf-data-distance attribute to specify the offset distance.

```sh
<a href="#" class="js--anchor-to" data-target="section1" tf-data-distance="50">Scroll to Section 1</a>
```

#### Option 1: Scroll with Buttons

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
      offsetTop: false,
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
      offsetTop: "tf-data-distance",
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

• `offsetTop:` This option allows you to specify an additional vertical scroll offset in pixels. It adjusts the final scroll position.

• `offsetTopURL:` This option defines the vertical scroll offset applied when scrolling to an anchor element specified in the URL. It is useful when you want to add an additional offset.
