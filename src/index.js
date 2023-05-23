import ScrollTo from "./ScrollTo";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
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
  }

  events() {}
}
export default Page;
new Page();
