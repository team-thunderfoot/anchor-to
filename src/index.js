import AnchorTo from "./AnchorTo";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    // only button / button + url
    new AnchorTo({
      trigger: "js--scroll-to",
      checkUrl: true, // or false
      anchorTo: "tf-data-target",
      offsetTop: "tf-data-distance",
      offsetTopURL: 100,
    });

    // only URL
    // new ScrollTo({
    //   trigger: false,
    //   checkUrl: true,
    //   anchorTo: false,
    //   offsetTop: false,
    //   offsetTopURL: 50,
    // });
  }

  events() {}
}
export default Page;
new Page();
