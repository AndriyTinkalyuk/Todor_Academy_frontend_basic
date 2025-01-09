import { burgerMenu } from './modules/burgerMenu.js'

let iconMenu = document.getElementById('menu');
let menuBody = document.querySelector('.header_nav');
let tools = document.querySelector('.header_tools')

burgerMenu(iconMenu, menuBody, tools);
