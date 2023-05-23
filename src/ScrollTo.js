class ScrollTo {
  constructor(payload) {
    this.DOM = {
      anchorTo: payload.anchorTo,
    };
    this.offsetTop = payload.offsetTop ? payload.offsetTop : 500;
    this.scrollFromURL();
  }
  init() {}

  events() {}

  anchorTo(e) {
    e.preventDefault();
    window.scrollTo({
      top: this.DOM.anchorTo.offsetTop - this.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  scrollFromURL() {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");

    if (url.includes("#")) {
      const targetId = url.slice(hashIndex + 1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        this.anchorTo(new Event("click"));
      }
    }
  }
}

export default ScrollTo;
