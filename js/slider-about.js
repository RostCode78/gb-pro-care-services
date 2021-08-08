let psa = {

    slider: $('.slider-about'),
    sliderCount: $$('.slider-active'),
    direction: true,
    count: 1

};

let msa = {

    autoSlider: (e) => {

        if( psa.count == 1 ) {
            psa.direction = true;
        } else if ( psa.count >= psa.sliderCount.length ) {
            psa.direction = false;
        }

        if ( psa.direction ) {
            psa.count++;
        } else {
            psa.count--;
        }

        psa.slider.style.left = ` ${ (psa.count - 1) * -100 }% `;

    }

};

const counterFunction = setInterval(msa.autoSlider, 4500);