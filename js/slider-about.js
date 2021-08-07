let psa = {

    // card: $$('.card-opacity'),
    slider: $('.slider-about'),
    sliderCount: $$('.slider-active'),
    item: 0,
    direction: true,
    count: 1

};

let msa = {

    start: () => {

        psa.card.forEach( e => {

            e.addEventListener(
                'click',
                msa.activarSlider
            );

        });

    },

    activarSlider: (e) => {
    
        if( e.target == psa.card[0] ) {

            psa.card[0].style.backgroundColor = "#303030d5";
            psa.card[1].style.backgroundColor = "#30303000";
            psa.card[2].style.backgroundColor = "#30303000";

        } else if( e.target == psa.card[1] ) {

            psa.card[0].style.backgroundColor = "#30303000";
            psa.card[1].style.backgroundColor = "#303030d5";
            psa.card[2].style.backgroundColor = "#30303000";


        } else {

            psa.card[0].style.backgroundColor = "#30303000";
            psa.card[1].style.backgroundColor = "#30303000";
            psa.card[2].style.backgroundColor = "#303030d5";

        }

        psa.item = e.target.getAttribute("item") - 1;
        psa.count = e.target.getAttribute("item");
        psa.slider.style.left = ` ${ psa.item * -100 }% `;
        clearInterval(psa.counter);
        psa.counter = setInterval(msa.autoSlider, 5000);

    },

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
        // console.log(psa.count);
        // console.log(psa.slider.style.right);
    
        // if( psa.count === 1 ) {

        //     psa.card[0].style.backgroundColor = "#303030d5";
        //     psa.card[1].style.backgroundColor = "#30303000";
        //     psa.card[2].style.backgroundColor = "#30303000";

        // } else if( psa.count === 2 ) {

        //     psa.card[0].style.backgroundColor = "#30303000";
        //     psa.card[1].style.backgroundColor = "#303030d5";
        //     psa.card[2].style.backgroundColor = "#30303000";


        // } else {

        //     psa.card[0].style.backgroundColor = "#30303000";
        //     psa.card[1].style.backgroundColor = "#30303000";
        //     psa.card[2].style.backgroundColor = "#303030d5";

        // }

    }

};

// msa.start();
const counterFunction = setInterval(msa.autoSlider, 4500);