import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initGsap() {
	const scrollTriggerSettings = {
		trigger: '.skills',
		start: '-80%',
		end: '100%',
		scrub: true,
	};

	const animations = [
		{ selector: '.circle__items--3', rotate: 6 },
		{ selector: '.circle__item--row-3', rotate: -6 },
		{ selector: '.circle__elements--2', rotate: -4 },
		{ selector: '.circle__item--row-2', rotate: 4 },
	];

	animations.forEach(({ selector, rotate }) => {
		gsap.to(selector, {
			scrollTrigger: scrollTriggerSettings,
			rotate,
		});
	});
}
