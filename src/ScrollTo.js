class ScrollTo {
  constructor(payload) {
    this.DOM = {
      anchorTo: payload.anchorTo,
      checkUrl : payload.checkUrl,
      trigger : payload.trigger,
    };
    this.offsetTop = payload.offsetTop ? payload.offsetTop : 500;
  }
  init() {
    if(this.checkUrl){
      this.scrollFromURL();
    }
    if(this.DOM.trigger){
      trigger.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          this.anchorTo(e);
        });
      });
    }
  }

  events() {}

  anchorTo() {
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
        this.anchorTo();
      }
    }
  }
}

export default ScrollTo;
