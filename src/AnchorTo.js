class AnchorTo {
    constructor(payload) {
        this.DOM = {
            triggers: document.querySelectorAll(`.${payload.trigger}`) ?? [], // Selects all elements with the specified class in payload.trigger
            checkUrl: payload.checkUrl, // Indicates whether to check the URL for scrolling
            anchorTo: payload.anchorTo, // Attribute that contains the ID of the element to scroll to
            offsetTopAttribute: payload.offsetTopAttribute, // Attribute that contains the custom vertical offset
            offsetTop: payload.offsetTop, // Custom vertical offset without attribute
            offsetTopURL: payload.offsetTopURL, // Custom vertical offset
        }
        this.init()
    }

    init() {
        // Performs scrolling if a parameter is found in the URL
        if (this.DOM.checkUrl) {
            this.scrollFromURL()
        }

        // Assigns click event to each trigger element
        if (!!this.DOM.triggers.length) {
            this.DOM.triggers.forEach((button) => {
                const targetId = button.getAttribute(this.DOM.anchorTo) // Get the ID of the target element from the attribute specified in payload.anchorTo
                const targetEl = document.getElementById(targetId) // Get the target element based on the obtained ID

                // Check if a custom offset is specified
                if (this.DOM.offsetTopAttribute) {
                    var offsetTopAttr = button.getAttribute(this.DOM.offsetTopAttribute)
                }

                var offsetTop = offsetTopAttr ?? this.DOM.offsetTop

                // Add a click event listener to each trigger button
                button.addEventListener("click", (e) => {
                    e.preventDefault()
                    this.scrollTo(targetEl.offsetTop, offsetTop) // Perform smooth scroll to the target element
                })
            })
        }
    }

    events() {}

    scrollTo(elementOffsetTop, offsetTop) {
        window.scrollTo({
            top: elementOffsetTop - offsetTop,
            left: 0,
            behavior: "smooth",
        })
    }

    scrollFromURL() {
        const url = window.location.href // Get the current URL of the browser
        const hashIndex = url.indexOf("?") // Check if a parameter exists in the URL for scrolling

        if (hashIndex > 0) {
            const targetId = url.slice(hashIndex + 1) // Get the ID of the target element from the URL
            const targetEl = document.getElementById(targetId) // Get the target element based on the obtained ID
            this.scrollTo(targetEl.offsetTop, this.DOM.offsetTopURL) // Perform smooth scroll to the target element from the URL
        }
    }
}

export default AnchorTo
