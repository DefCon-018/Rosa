
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
    duration: 500,
    distance: '90rem',
    delay: 100
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 500,
    distance: '90rem',
    delay: 200
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 500,
    distance: '90rem',
    delay: 200
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 500,
    distance: '90rem',
    delay: 200
})