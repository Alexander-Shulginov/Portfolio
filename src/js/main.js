import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import burgeMenuInit from './burger';

burgeMenuInit();

gsap.registerPlugin(ScrollTrigger);

function initGsap() {
	const scrollTriggerSettings = {
		trigger: '.skills',
		start: '-80%',
		end: '100%',
		scrub: true,
	};

	const animations = [
		{ selector: '.circle__items--3', rotate: 5 },
		{ selector: '.circle__item--row-3', rotate: -5 },
		{ selector: '.circle__elements--2', rotate: -3 },
		{ selector: '.circle__item--row-2', rotate: 3 },
	];

	animations.forEach(({ selector, rotate }) => {
		gsap.to(selector, {
			scrollTrigger: scrollTriggerSettings,
			rotate,
		});
	});
}

initGsap();
