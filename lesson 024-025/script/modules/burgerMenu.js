export function burgerMenu(iconMenu, menuBody, tools) {
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            tools.classList.toggle('_active');
        });
    }
}