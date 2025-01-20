// потрібно переробити в модуль

let introBlock = document.querySelector('.welcome');
document.querySelector('.draw').addEventListener('animationend', (e) =>  {
        introBlock.style.display = 'none';
        document.body.style.overflow = 'auto';
    
});
