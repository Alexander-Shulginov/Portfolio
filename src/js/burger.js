const burgeMenuInit = () => {
	const burgerBtn = document.querySelector('.header__burger');
	const burgeMenu = document.querySelector('.header__nav');

	const cssActiveClass = 'header__burger--active';
	const cssActiveMenuClass = 'header__nav--active';
	const cssBodyActiveClass = 'overlay';
	const cssLinkClass = 'header__link';

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle(cssActiveClass);
		burgeMenu.classList.toggle(cssActiveMenuClass);
		document.body.classList.toggle(cssBodyActiveClass);
	});

	burgeMenu.addEventListener('click', (event) => {
		if (event.target.classList.contains(cssLinkClass)) {
			burgerBtn.classList.remove(cssActiveClass);
			burgeMenu.classList.remove(cssActiveMenuClass);
			document.body.classList.remove(cssBodyActiveClass);
		}
	});

	document.addEventListener('click', (event) => {
		if (
			!burgerBtn.contains(event.target)
			&& !burgeMenu.contains(event.target)
		) {
			burgerBtn.classList.remove(cssActiveClass);
			burgeMenu.classList.remove(cssActiveMenuClass);
			document.body.classList.remove(cssBodyActiveClass);
		}
	});
};

export default burgeMenuInit;
