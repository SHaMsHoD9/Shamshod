new WOW().init();

let faBars = document.querySelector('.fa-bars');
let dBars = document.querySelector('.dBars');
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

faBars.addEventListener('click', function () {
    
    if (dBars.style.display == 'block') {
        faBars.style.transform = 'rotate(0deg)'
        faBars.style.color = 'white'
        dBars.style.display = 'none'
        header.style.display = 'block'
        main.style.display = 'block'
        footer.style.display = 'block'
    } else {
        faBars.style.transform = 'rotate(45deg)'
        faBars.style.color = '#5CDA42'
        dBars.style.display = 'block' 
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
    }
})