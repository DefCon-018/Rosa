
const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(e){
    body.classList.toggle('open');
})

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '90rem',
    delay: 300
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '90rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '90rem',
    delay: 500
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '90rem',
    delay: 500
})