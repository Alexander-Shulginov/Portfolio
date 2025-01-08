import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shuffleArray from '../helpers/shuffleArray';

gsap.registerPlugin(ScrollTrigger);

export default function skillsGsap() {
	const heroLetters = gsap.utils.toArray('.circle__item');
	const skillsElem = gsap.utils.toArray('.skills__elem');

	const shuffledHeroLetters = shuffleArray([...heroLetters]);

	shuffledHeroLetters.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.skills',
				start: '-30%',
			},
			opacity: 0,
			scale: 1.2,
			duration: 0.8,
			delay: index * 0.1,
		});
	});

	skillsElem.forEach((element, index) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: '.skills__list',
			},
			opacity: 0,
			duration: 0.6,
			delay: index * 0.1,
		});
	});
}
