import ScrollTo from "./ScrollTo";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    new ScrollTo({
      checkUrl:false,
      trigger:document.querySelectorAll(".js--anchor-to"),
      anchorTo: document.getElementById(button.dataset.target),
      offsetTop: 0,
    });
  }

  events() {}
}
export default Page;
new Page();
