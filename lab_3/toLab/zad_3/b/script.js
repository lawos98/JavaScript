class CustomSpan extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: "open"});
        let interval = -1;
        let zero = false;
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(val) {
        return this.setAttribute("value", val);
    }

    static get observedAttributes() {
        return ["value"];
    }

    decrement() {
        if(this.value>0){
            this.value-=1
        }
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === "value") {
            this.render();
            if (newVal === "0") {
                if (this.zero) {
                    document.getElementById("counter").value = "0";
                    this.zero = false;
                }
            }
        }
    }

    connectedCallback() {
        this.render();
        let counterInput = document.getElementById("counter");
        counterInput.addEventListener("input", () => {
            window.clearInterval(this.interval);
            this.interval = window.setInterval(() => this.decrement(), 1000);
            if (counterInput.value > 0) {
                this.value = counterInput.value;
                this.zero = true;
            }
        })
    }

    render() {
        this.shadowRoot.textContent = this.value
    }

}

customElements.define('custom-span', CustomSpan);