class AnchorTo {
    constructor(payload) {
        this.DOM = {
            element: payload.element, // Select the element with the specified class in payload.trigger
        }

        this.offsetTopAttr = this.DOM.element.getAttribute(payload.offsetTopAttribute)
        this.targetId = this.DOM.element.getAttribute(payload.anchorTo) // Get the ID of the target element from the attribute specified in payload.anchorTo
        this.checkUrl = payload.checkUrl // Indicates whether to check the URL for scrolling
        this.offsetTop = payload.offsetTop // Custom vertical offset without attribute
        this.offsetTopURL = payload.offsetTopURL // Custom vertical offset
        this.init()
    }

    init() {
        // Performs scrolling if a parameter is found in the URL
        if (this.checkUrl) {
            this.scrollFromURL()
        }

        // Assigns click event to each trigger element
        if (this.DOM.element) {
            const targetEl = document.getElementById(this.targetId) // Get the target element based on the obtained ID
            // Check if a custom offset is specified
            var offsetTop = this.offsetTopAttr ?? this.offsetTop
            // Add a click event listener to each trigger button
            // Add a click event listener to each trigger button
            this.clickHandler = (e) => {
                e.preventDefault();
                this.scrollTo(targetEl.offsetTop, offsetTop);
            };
            this.DOM.element.addEventListener("click", this.clickHandler);
        }
    }

    events() { }

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
            this.scrollTo(targetEl.offsetTop, this.offsetTopURL) // Perform smooth scroll to the target element from the URL
        }
    }
    destroy() {
        // Remove the click event listener from the element
        if (this.DOM.element) {
            this.DOM.element.removeEventListener("click", this.clickHandler);
        }

        // Clear all references
        this.DOM = null;
        this.offsetTopAttr = null;
        this.targetId = null;
        this.checkUrl = null;
        this.offsetTop = null;
        this.offsetTopURL = null;
    }
}

export default AnchorTo
