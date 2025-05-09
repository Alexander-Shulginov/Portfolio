// @ts-nocheck
export const burgerMenuInit = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__nav');

    const cssActiveClass = 'header__burger--active';
    const cssActiveMenuClass = 'header__nav--active';
    const cssBodyActiveClass = 'overlay';
    const cssLinkClass = 'header__link';

    if (!burgerBtn || !burgerMenu) return;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle(cssActiveClass);
        burgerMenu.classList.toggle(cssActiveMenuClass);
        document.body.classList.toggle(cssBodyActiveClass);
        setTimeout(() => {
            burgerMenu.focus();
        }, 50);
    });

    burgerMenu.addEventListener('click', (event) => {
        if (event.target?.classList.contains(cssLinkClass)) {
            burgerBtn.classList.remove(cssActiveClass);
            burgerMenu.classList.remove(cssActiveMenuClass);
            document.body.classList.remove(cssBodyActiveClass);
        }
    });

    document.addEventListener('click', (event) => {
        if (!burgerBtn.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerBtn.classList.remove(cssActiveClass);
            burgerMenu.classList.remove(cssActiveMenuClass);
            document.body.classList.remove(cssBodyActiveClass);
        }
    });
};
