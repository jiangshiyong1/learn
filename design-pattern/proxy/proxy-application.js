class PreLoadImage {

    constructor(imgNode) {
        this.imgNode = imgNode
    }

    setSrc(imgUrl) {
        this.imgNode.src = imgUrl
    }
}

class ProxyImage {
    static LOADDING_URL = 'xxxx'
    constructor(targetImage) {
        this.targetImage = targetImage
    }

    setSrc(targetUrl) {
        this.targetImage.setSrc(ProxyImage.LOADDING_URL)
        const virtualImage = new Image()
        virtualImage.onload = () => {
            this.targetImage.setSrc(targetUrl)
        }
        virtualImage.src = targetUrl
    }
}