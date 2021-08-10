const pF = {
    inputForm: $$('.input-form'),
    lblForm: $$('.lbl-form')
}

const mF = {

    focus: () => {

        pF.inputForm.forEach( e => {

            e.addEventListener(
                'focus',
                mF.inputFocus
            );

            e.addEventListener(
                'blur',
                mF.inputblur
            );

        })

    },

    inputFocus: ( e ) => {

        if( e.target == pF.inputForm[0] ) {
            pF.lblForm[0].style.bottom = '30px';
        } else if( e.target == pF.inputForm[1] ) {
            pF.lblForm[1].style.bottom = '30px';
        } else {
            pF.lblForm[2].style.bottom = '30px';
        }

    },

    inputblur: ( e ) => {

        if( e.target == pF.inputForm[0] ) {
            pF.lblForm[0].style.bottom = '5px';
        } else if( e.target == pF.inputForm[1] ) {
            pF.lblForm[1].style.bottom = '5px';
        } else {
            pF.lblForm[2].style.bottom = '5px';
        }

    },

};

mF.focus();