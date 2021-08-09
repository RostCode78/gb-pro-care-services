const pMG = {
    pictures: $$('.box-img>img'),
    modalGallery: $('#modal-gallery'),
    modal: $('.img-modal-gallery'),
    urlImg: null,
    closeBtn: $('.close-modal-gallery')
}

const mMG = {

    getPicture: () => {
        pMG.pictures.forEach( e => {
            e.addEventListener(
                'click',
                mMG.showPicture
            )
        })
    },

    showPicture: ( e ) => {
        pMG.urlImg = e.target;
        mMG.modalGallery(pMG.urlImg);
    },

    modalGallery: ( url ) => {
        pMG.modalGallery.style.display = "flex";
        pMG.modal.innerHTML = url.outerHTML;

        pMG.modal.childNodes[0].style.width = "100%";
        pMG.modal.childNodes[0].style.height = "100%";
        pMG.modal.childNodes[0].style.backgroundSize = "auto";
    },

    quitarFoto: () => {
        pMG.closeBtn.addEventListener(
            'click',
            mMG.borrar
        )
    },

    borrar: () => {
        pMG.modalGallery.style.display = "none";
    }

}

mMG.getPicture();
mMG.quitarFoto();