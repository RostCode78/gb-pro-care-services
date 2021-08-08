const pMS = {
    openModal: $$('.box-service'),
    modal: $('.modal-services-container'),
    closeModal: $('.close-modal-services')
}

const mMS = {

    start: () => {

        pMS.openModal.forEach( e => {
            e.addEventListener(
                'click',
                mMS.openModal
            )
        });

        pMS.closeModal.addEventListener(
            'click',
            mMS.closeModal
        );

        pMS.modal.addEventListener(
            'click',
            mMS.closeModal
        );

    },

    openModal: e => {

        pMS.modal.style.display = 'flex';

        if ( e.target == pMS.openModal[0] ) {
            pMS.openModal[0].style.backgroundColor = "#45a3a2"
        } else {
            pMS.openModal[1].style.backgroundColor = "#f24d32"
            pMS.openModal[2].style.backgroundColor = "#f24d32"
            pMS.openModal[3].style.backgroundColor = "#f24d32"
            pMS.openModal[4].style.backgroundColor = "#f24d32"
            pMS.openModal[5].style.backgroundColor = "#f24d32"
        }

    },

    closeModal: e => {

        pMS.modal.style.display = 'none';

    }

}

mMS.start();