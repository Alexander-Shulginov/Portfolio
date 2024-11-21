import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import burgeMenuInit from './burger';

burgeMenuInit();

gsap.registerPlugin(ScrollTrigger);

gsap.to('.circle__items', {
	scrollTrigger: {
		trigger: '.skills',
		start: '-80%',
		end: '100%',
		scrub: true,
		markers: true,
	},

	rotate: 15,
});

gsap.to('.circle__item', {
	scrollTrigger: {
		trigger: '.skills',
		start: '-80%',
		end: '100%',
		scrub: true,
		// markers: true,
	},

	rotate: -15,
});
