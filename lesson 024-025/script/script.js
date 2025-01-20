import { burgerMenu } from './modules/burgerMenu.js'

let iconMenu = document.getElementById('menu');
let menuBody = document.querySelector('.header_nav');
let tools = document.querySelector('.header_tools')

burgerMenu(iconMenu, menuBody, tools);

// потрібно переробити в модуль

let introBlock = document.querySelector('.welcome');
document.querySelector('.draw').addEventListener('animationend', (e) =>  {
        introBlock.style.display = 'none';
        document.body.style.overflow = 'auto';
    
});
