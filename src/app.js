import Palette from "./modules/Palette";
import Color from "./modules/Color";
import { Notyf } from 'notyf';
import "notyf/notyf.min.css";

const notyf = new Notyf();

function displayColors(palette) {
    document.querySelector(`header`).classList.add(`minimized`);

    const container = document.querySelector(`main`);
    container.innerHTML = ``;

    const nbColors = palette.hexColors.length;
    console.log(palette.hexColors);
    document.body.style.background = `linear-gradient(-45deg, #${palette.hexColors[0]}, #${palette.hexColors[Math.round(nbColors / 2)]}, #${palette.hexColors[nbColors-1]})`;

    console.log(palette.hsl);
    document.documentElement.style.setProperty(`--shadow-color`, `${palette.hsl[0]}deg ${palette.hsl[1]}% ${palette.hsl[2]}%`);

    document.body.style.backgroundSize = `400% 400%`;
    
    palette.hslColors.forEach(color => {
        let col = new Color(color);
        col.display(container);
    });
}

const handleForm = (e) => {
    try {
        e.preventDefault();

        let hex = e.target.querySelector(`input`).value;
        //e.target.firstElementChild.value alternative

        const regex = new RegExp(`#?[0-9A-Fa-f]{6}$`);
        if(!regex.test(hex))
            throw new Error(`${hex} is not a valid Hexadecimal color.`);
        
        const palette = new Palette(hex.replace(`#`, ``));
        displayColors(palette);
    } catch (err) {
        notyf.error(err.message);
    }
}

const handleClick = async (e) => {
    const color = e.target.closest(".color").dataset.color;
    await navigator.clipboard.writeText(color);
    notyf.success(`copied ${color} to clipboard`)
}

const form = document.querySelector(`form`);
form.addEventListener(`submit`, handleForm);

const main = document.querySelector(`main`);
main.addEventListener(`click`, handleClick);