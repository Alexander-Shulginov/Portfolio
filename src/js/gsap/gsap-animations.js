import aboutGsap from './about-gsap';
import heroGsap from './hero-gsap';
import skillsGsap from './skills-gsap';

export default function gsapInit() {
	heroGsap();
	skillsGsap();
	aboutGsap();
}
