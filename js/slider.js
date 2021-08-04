const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log;

const slider = $('#slider-container');
const items = $$('.item');
let elementStyle = window.getComputedStyle(slider).getPropertyValue('width');
let nextTarget;
let position = 0;
let width = elementStyle.slice(0,-2);
let target = 0;
slider.scrollLeft = 0;

// Variables para auto-slider
let direction = true; // True = Next - False = Prev
let autoSlider = true;
let count = 1;

let autoSliderInterval = () => {

    if ( count == 1 ) {
        direction = true;
    } else if ( count >= items.length ) {
        direction = false;
    }

    if ( direction ) {
        count++;
        position++;
        target = position;
        slider.scrollLeft = width * target;
        nextTarget = width * target;
    } else {
        count--;
        position--;
        target = position;
        slider.scrollLeft = width * target;
        nextTarget = width * target;
    }

};

let counter = setInterval(autoSliderInterval, 5000);