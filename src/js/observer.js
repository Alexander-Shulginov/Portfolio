const animated = () => {
	const elementsToObserve = {
		".works__example": "works__example--active",
		".skills__item": "skills__item--active",
		".skills__techno": "skills__techno--active",
		".about__content": "about__content--active",
		".hero__descr": "hero__descr--active",
		".hero__photo": "hero__photo--active",
		".contacts__item": "contacts__item--active",
		"[class*=title]": "isVisible",
	};

	function onEntry(entry, classToAdd) {
		entry.forEach((change) => {
			if (change.isIntersecting) {
				change.target.classList.add(classToAdd);
			}
		});
	}

	function observeElements(selector, classToAdd) {
		let options = {
			threshold: [0.4],
		};

		let observer = new IntersectionObserver((entry) => {
			onEntry(entry, classToAdd);
		}, options);

		let elements = document.querySelectorAll(selector);

		for (let elm of elements) {
			observer.observe(elm);
		}
	}

	for (let selector in elementsToObserve) {
		let classToAdd = elementsToObserve[selector];
		observeElements(selector, classToAdd);
	}
};

export default animated;
