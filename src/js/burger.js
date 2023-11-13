const burgeMenu = () => {
	const burgerBtn = document.querySelector(".header__burger");
	const burgeMenu = document.querySelector(".header__nav");

	const cssActiveClass = "header__burger--active";
	const cssActiveMenuClass = "header__nav--active";
	const cssLinkClass = "header__link"

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle(cssActiveClass);
		burgeMenu.classList.toggle(cssActiveMenuClass);
	});

	burgeMenu.addEventListener("click", (event) => {
		if (event.target.classList.contains(cssLinkClass)) {
			burgerBtn.classList.remove(cssActiveClass);
			burgeMenu.classList.remove(cssActiveMenuClass);
		}
	});

	document.addEventListener("click", (event) => {
		if (!burgerBtn.contains(event.target) && !burgeMenu.contains(event.target)) {
			burgerBtn.classList.remove(cssActiveClass);
			burgeMenu.classList.remove(cssActiveMenuClass);
		}
	});
};

export default burgeMenu;
