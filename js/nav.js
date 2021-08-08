const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log;

const menuBtn = $('.btn-nav');
const sidebar = $('.sidebar');
const text = $('.txt-logo-nav');
let menuOpen = false;

menuBtn.addEventListener(
    'click',
    () => {

        if( !menuOpen ) {

            menuBtn.classList.add('open');
            sidebar.classList.add('open');
            text.classList.add('open');
            menuOpen = true;

        } else {

            menuBtn.classList.remove('open');
            sidebar.classList.remove('open');
            text.classList.remove('open');
            menuOpen = false;
            
        }
        
    }
);