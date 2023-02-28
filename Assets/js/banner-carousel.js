
const plasticCarousel = require('bootstrap').Carousel;

class plasticBannerCarousel {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$plasticCarousel = this.$componentSelector.querySelector('.banner-carousel__slider')
        this.init()
    }
    init() {
        let _self = this
        _self.bannerSlider()
    }

    bannerSlider() {
        let _self = this
        console.log("this is super")
        function plasticSlider() {
            if (_self.$componentSelector) {
                var carousel = new plasticCarousel(_self.$plasticCarousel)
            }
        }
        window.addEventListener("DOMContentLoaded", plasticSlider, false)

    }
}
let bannerCarousel

const bannerCarouselComponent = function alertInstance() {

    let bannerCarouselHolder = document.querySelectorAll('.banner-carousel') // We cast it to let compiler know it can be iterated

    Array(...bannerCarouselHolder).forEach(function (item) {
        bannerCarousel = new plasticBannerCarousel(item)
    })
}


export default bannerCarouselComponent
