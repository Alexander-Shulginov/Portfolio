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
			markers: true,
		},

		rotate: 15,
	});

	gsap.to('.circle__item--row-3', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: -15,
	});

	gsap.to('.circle__items--1', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			markers: true,
		},

		rotate: 25,
	});

	gsap.to('.circle__item--row-1', {
		scrollTrigger: {
			trigger: '.skills',
			start: '-80%',
			end: '100%',
			scrub: true,
			// markers: true,
		},

		rotate: -25,
	});
}

initGsap();
