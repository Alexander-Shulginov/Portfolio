import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initGsap() {
	const heroLetters = gsap.utils.toArray('.hero__letter');
	const workList = gsap.utils.toArray('.works__item');

	heroLetters.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.hero',
			},
			y: 20,
			opacity: 0,
			duration: 0.3,
			delay: index * 0.03,
		});
	});

	gsap.from('.hero__photo', {
		opacity: 0,
		duration: 0.7,
		delay: 0.2,
		x: 25,
	});

	workList.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.works',
				start: '-35%',
				end: '90%',
				markers: true,
			},
			y: 20,
			opacity: 0,
			duration: 0.9,
			delay: index * 0.4,
		});
	});
}
