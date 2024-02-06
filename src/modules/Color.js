import * as convert from "color-convert";

class Color {
    #hsl = ``;
    #hex = ``;
    #element = ``;

    //attend un argument hex = [x,y,z]
    constructor(hsl){
        this.#hsl = hsl;
        this.#hex = convert.hsl.hex(this.#hsl);
        this.#element = this.#generateElement();
    }

    #generateElement() {
        const div = document.createElement(`div`);
        div.classList.add(`color`);
        div.setAttribute(`data-color`, `#${this.#hex}`);
        div.style.backgroundColor = `#${this.#hex}`;

        const p = document.createElement(`p`);
        const textColor = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
        p.style.color = textColor;
        p.innerText = `#${this.#hex}`;

        div.append(p);
        return div;
    }

    display(node) {
        node.append(this.#element);
    }
}

export default Color;