
class plasticAccordianComponent {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$accordianHeading = this.$componentSelector.querySelectorAll('.services__accordian-heading')
        this.$accordianContent = this.$componentSelector.querySelectorAll('.services__accordian-copy')

        this.init()
    }
    init() {
        let _self = this
        _self.serviceAccordian()
    }

    serviceAccordian() {
        let _self = this
        console.log("this is accordian")
        function plasticCollapse() {
            if (_self.$componentSelector) {
                const triggers = []
                const copyOpenClass = "services__accordian-copy--open"
                _self.$accordianHeading.forEach((h, i) => {
                    let btn = h.querySelector("button");
                    triggers.push(btn);
                    let target = h.nextElementSibling;
                    btn.onclick = () => {
                        let expanded = btn.getAttribute("aria-expanded") === "true";
                        if (expanded) {
                            closeItem();
                        } else {
                            openItem(target, btn);
                        }
                    };
                });

                function closeAllExpandedItems() {
                    const expandedTriggers = triggers.filter(
                        (t) => t.getAttribute("aria-expanded") === "true"
                    );
                    const expandedCopy = Array.from(_self.$accordianContent).filter((c) =>
                        c.classList.value.includes(copyOpenClass)
                    );
                    expandedTriggers.forEach((trigger) => {
                        trigger.setAttribute("aria-expanded", false);
                    });
                    expandedCopy.forEach((copy) => {
                        copy.classList.remove(copyOpenClass);  
                        copy.setAttribute("aria-hidden", true);                     
                    });
                }

                function closeItem() {
                    closeAllExpandedItems();
                }

                function openItem(target, btn) {
                    closeAllExpandedItems();
                    btn.setAttribute("aria-expanded", true);
                    target.classList.add(copyOpenClass);                   
                    target.setAttribute("aria-hidden",false);
                }
                //setTimeout(() => triggers[0].click(), 750);
            }
        }
        window.addEventListener("DOMContentLoaded", plasticCollapse, false)

    }
}
let serviceAccordian

const plasticAccordian = function alertInstance() {

    let serviceAccordianHolder = document.querySelectorAll('.services__accordian') // We cast it to let compiler know it can be iterated

    Array(...serviceAccordianHolder).forEach(function (item) {
        serviceAccordian = new plasticAccordianComponent(item)
    })
}

export default plasticAccordian
