import * as convert from "color-convert";

class Palette {
    #colors = [];

    constructor(hex) {
        let hsl = convert.hex.hsl(hex);
        for(let i = 0; i <= 100; i+=100/10){
            hsl[2] = i;
            this.#colors.push([...hsl]);
        }
    }

    get hslColors(){
        return this.#colors;
    }

    get hexColors(){
        return this.#colors.map(color => convert.hsl.hex(color));
    }
}

export default Palette;