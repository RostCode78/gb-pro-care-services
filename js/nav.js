const menuBtn = document.querySelector('.btn-nav');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;

menuBtn.addEventListener(
    'click',
    () => {

        if( !menuOpen ) {

            menuBtn.classList.add('open');
            sidebar.classList.add('open');
            menuOpen = true;

        } else {

            menuBtn.classList.remove('open');
            sidebar.classList.remove('open');
            menuOpen = false;
            
        }
        
    }
);