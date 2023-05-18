// NAVBAR
//  When my max width is 799px so everytime I click on bar I want navbar to open from side

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//  If someone clicks on close remove it
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}