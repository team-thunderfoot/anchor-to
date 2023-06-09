import AnchorTo from "./AnchorTo"

class Page {
    constructor() {
        this.init()
        this.events()
    }
    init() {
        // only button / button + url
        document.querySelectorAll(".js--scroll-to").forEach((element) => {
            new AnchorTo({
                element: element,
                checkUrl: true, // or false
                anchorTo: "tf-data-target",
                offsetTopAttribute: "tf-data-distance",
                offsetTop: 50,
                offsetTopURL: 100,
            })
        })

        // only URL
        // new ScrollTo({
        //     element: false,
        //     checkUrl: true,
        //     anchorTo: false,
        //     offsetTopAttribute: false,
        //     offsetTop: false,
        //     offsetTopURL: 50,
        // })
    }

    events() {}
}
export default Page
new Page()
