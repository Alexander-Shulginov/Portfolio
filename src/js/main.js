import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import burgeMenuInit from './burger';

burgeMenuInit();

gsap.registerPlugin(ScrollTrigger);

gsap.to('.ss', {
	scrollTrigger: {
		trigger: '.skills',
		start: '50% 100%',
		scrub: true,
		markers: true,
	},

	rotate: 40,
});
