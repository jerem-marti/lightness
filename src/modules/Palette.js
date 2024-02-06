import * as convert from "color-convert";

class Palette {
    #hex = ``;
    #hsl = ``;
    #colors = [];

    constructor(hex) {
        this.#hex = hex;
        this.#hsl = convert.hex.hsl(this.#hex);
        let hsl = this.#hsl;
        for(let i = 0; i <= 100; i+=100/10){
            hsl[2] = i;
            this.#colors.push([...hsl]);
        }
    }

    get hsl() {
        return this.#hsl;
    }

    get hex() {
        return this.#hex;
    }

    get hslColors(){
        return this.#colors;
    }

    get hexColors(){
        return this.#colors.map(color => convert.hsl.hex(color));
    }
}

export default Palette;