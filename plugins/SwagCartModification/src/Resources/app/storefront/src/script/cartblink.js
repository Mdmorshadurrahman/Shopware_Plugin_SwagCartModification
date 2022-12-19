import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class cartblink extends Plugin {
    init(){
        this.cartEl = DomAccess.querySelector(document,'.btn-buy');
        const cartText = this.cartEl.innerText;
        this.cartEl.addEventListener("click",function(){
            this.style.backgroundColor = "#464443";
            this.innerText = "Wird in den Warenkorb gelegt";
            window.setTimeout(() => {
                this.innerText = cartText;
                this.style.backgroundColor = "#008490";
            },1000)
        })
    }
}
