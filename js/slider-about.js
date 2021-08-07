const sliderAbout = $('#slider-about');
const itemsAbout = $$('.item-about');
let aboutStyle = window.getComputedStyle(sliderAbout).getPropertyValue('width');
let nextAboutTarget;
let aboutPosition = 0;
let widthAbout = aboutStyle.slice(0, -2);
let aboutTarget = 0;
sliderAbout.scrollLeft = 0;

let directionAbout = true;
let countAbout = 1;

let aboutSliderInterval = () => {

    if( countAbout == 1 ) {
        directionAbout = true;
    } else if ( countAbout >= itemsAbout.length ) {
        directionAbout = false;
    }

    if ( directionAbout ) {
        countAbout++;
        aboutPosition++;
        aboutTarget = aboutPosition;
        sliderAbout.scrollLeft = widthAbout * aboutTarget;
        nextAboutTarget = widthAbout * aboutTarget;
    } else {
        countAbout--;
        aboutPosition--;
        aboutTarget = aboutPosition;
        sliderAbout.scrollLeft = widthAbout * aboutTarget;
        nextAboutTarget = widthAbout * aboutTarget;
    }

}

let counterAbout = setInterval(aboutSliderInterval, 5500);