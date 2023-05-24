class AnchorTo {
  constructor(payload) {
    this.DOM = {
      triggers: document.querySelectorAll(`.${payload.trigger}`) ?? [],
      checkUrl: payload.checkUrl,
      anchorTo: payload.anchorTo,
      offsetTop: payload.offsetTop,
      offsetTopURL: payload.offsetTopURL,
    };
    this.init();
  }

  init() {
    if (this.DOM.checkUrl) {
      this.scrollFromURL();
    }

    if (!!this.DOM.triggers.length) {
      this.DOM.triggers.forEach((button) => {
        const targetId = button.getAttribute(this.DOM.anchorTo);
        const targetEl = document.getElementById(targetId);

        if (this.DOM.offsetTop) {
          var offsetTop = button.getAttribute(this.DOM.offsetTop);
        }

        button.addEventListener("click", (e) => {
          e.preventDefault();
          this.scrollTo(targetEl.offsetTop, offsetTop);
        });
      });
    }
  }

  events() {}

  scrollTo(elementOffsetTop, offsetTop) {
    window.scrollTo({
      top: elementOffsetTop - offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  scrollFromURL() {
    const url = window.location.href;
    const hashIndex = url.indexOf("?");

    if (hashIndex > 0) {
      const targetId = url.slice(hashIndex + 1);
      const targetEl = document.getElementById(targetId);
      //TODO: Obtener distancia de algun Trigger
      this.scrollTo(targetEl.offsetTop, this.DOM.offsetTopURL);
    }
  }
}

export default AnchorTo;
