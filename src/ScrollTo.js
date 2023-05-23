class ScrollTo {
  constructor(payload) {
    this.DOM = {
      anchorTo: payload.anchorTo,
    };
    this.offsetTop = payload.offsetTop ? payload.offsetTop : 500;
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
}

export default ScrollTo;
