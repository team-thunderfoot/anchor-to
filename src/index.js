import ScrollTo from "./ScrollTo";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    this.scrollTo = new ScrollTo({
      anchorTo: document.getElementById("title"),
      offsetTop: 100,
    });

    document.querySelector(".js--anchor-to").addEventListener("click", (e) => {
      this.scrollTo.anchorTo(e);
    });
  }

  events() {}
}
export default Page;
new Page();
