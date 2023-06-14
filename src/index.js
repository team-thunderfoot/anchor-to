import AnchorTo from "./AnchorTo"

class Page {
    constructor() {
        this.init()
        this.events()
    }
    init() {
        // only button / button + url
        new AnchorTo({
            trigger: "js--scroll-to",
            checkUrl: true, // or false
            anchorTo: "tf-data-target",
            offsetTopAttribute: "tf-data-distance", // tf-data-distance
            offsetTop: 150,
            offsetTopURL: 100,
        })

        // only URL
        // new ScrollTo({
        //   trigger: false,
        //   checkUrl: true,
        //   anchorTo: false,
        //   offsetTopAttribute: false,
        //   offsetTop: false,
        //   offsetTopURL: 50,
        // });
    }

    events() {}
}
export default Page
new Page()
