import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import burgeMenuInit from './burger';

burgeMenuInit();

gsap.registerPlugin(ScrollTrigger);

function initGsap() {
	gsap.to('.circle__items--3', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: 5,
	});

	gsap.to('.circle__item--row-3', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: -5,
	});

	gsap.to('.circle__elements--2', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: -3,
	});

	gsap.to('.circle__item--row-2', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: 3,
	});
}

initGsap();
