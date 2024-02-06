import Palette from "./modules/Palette";
import Color from "./modules/Color";

const handleForm = (e) => {
    try {
        e.preventDefault();

        let hex = e.target.querySelector(`input`).value;
        //e.target.firstElementChild.value alternative

        const regex = new RegExp(`#?[0-9A-Fa-f]{6}$`);
        console.log(hex);
        if(!regex.test(hex))
            throw new Error(`${hex} is not a valid Hexadecimal color.`);
        
        const palette = new Palette(hex.replace(`#`, ``));
        console.log(palette.hslColors[0]);
        const color = new Color(palette.hslColors[0]);
        color.display(document.querySelector(`main`));
    } catch (err) {
        console.error(err);
    }
}

const form = document.querySelector(`form`);
form.addEventListener(`submit`, handleForm);
