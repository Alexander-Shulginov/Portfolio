import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutGsap() {
	gsap.from('.about__content', {
		scrollTrigger: {
			trigger: '.about__content',
		},
		opacity: 0,
		duration: 0.9,
		y: 20,
		delay: 0.2,
	});
}
