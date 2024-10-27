const animated = () => {
	const elementsToObserve = {
		'.works__example': 'works__example--active',
		'.skills__item': 'skills__item--active',
		'.skills__techno': 'skills__techno--active',
		'.about__content': 'about__content--active',
		'.hero__descr': 'hero__descr--active',
		'.hero__photo': 'hero__photo--active',
		'[class*=title]': 'isVisible',
	};

	function onEntry(entry, classToAdd) {
		entry.forEach((change) => {
			if (change.isIntersecting) {
				change.target.classList.add(classToAdd);
			}
		});
	}

	function observeElements(selector, classToAdd) {
		const options = {
			threshold: [0.4],
		};

		const observer = new IntersectionObserver((entry) => {
			onEntry(entry, classToAdd);
		}, options);

		const elements = document.querySelectorAll(selector);

		for (const elm of elements) {
			observer.observe(elm);
		}
	}

	for (const selector in elementsToObserve) {
		const classToAdd = elementsToObserve[selector];
		observeElements(selector, classToAdd);
	}
};

export default animated;
