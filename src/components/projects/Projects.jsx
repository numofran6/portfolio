import { useEffect } from 'react';
import {
	tourbuddy,
	greenshop,
	church,
	mobileapp,
} from '../../assets/images/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectContainer } from './ProjectContainer';
import { projectStack } from '../../utils/data';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
	useEffect(() => {
		let containers = document.querySelectorAll('.container');

		containers.forEach((container) => {
			const imgContainer = container.querySelector('.img-container');
			const img = container.querySelector('.img');
			const textContainer = container.querySelector('.text-container');
			const contentLine = textContainer.children[0].children[0];
			const contentP = textContainer.children[1];
			const contentBtn = textContainer.children[2];
			const contentStack = textContainer.children[3];

			gsap.delayedCall(1, () => {
				const tl = gsap
					.timeline({
						scrollTrigger: {
							trigger: container,
							start: 'top 65%',
							end: 'top top',
							toggleActions: 'play none resume pause',
						},
					})
					.set(container, {
						duration: 0.5,
						visibility: 'visible',
						ease: 'power4.Out',
					})
					.to(
						imgContainer,
						{
							duration: 1.6,
							width: '0%',
							ease: 'power4.out',
						},
						0.2
					)
					.from(
						img,
						{
							duration: 1.6,
							scale: 1.6,
							ease: 'power4.out',
						},
						0.2
					)
					.from(
						contentLine.firstChild,
						{
							duration: 1.5,
							y: '54px',
							ease: 'power4.inOut',
						},
						0.2
					)
					.from(
						contentP,
						{
							duration: 1.5,
							y: 20,
							opacity: 0,
							ease: 'power4.inOut',
						},
						0.6
					)
					.from(
						contentBtn,
						{
							duration: 1.5,
							y: 20,
							opacity: 0,
							ease: 'power4.inOut',
						},
						1
					)
					.from(
						contentStack,
						{
							duration: 1.5,
							y: 20,
							opacity: 0,
							ease: 'power4.inOut',
						},
						1.4
					);
			});

			const tl2 = gsap
				.timeline({
					scrollTrigger: {
						trigger: '#project-heading',
						start: 'top 95%',
						toggleActions: 'play none resume pause',
					},
				})
				.fromTo(
					'#project-heading',
					{
						y: 70,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						ease: 'power4.inOut',
						duration: 1.4,
					}
				);
		});
	}, []);

	return (
		<div className="w-full pt-[4rem] max-w-container" id="my-projects">
			<h1 id="project-heading" className="section-title mb-5 md:mb-0">
				<span className="block">Featured</span>
				<span className="block">Projects</span>
			</h1>

			<div className="space-y-20 md:space-y-32 z-30">
				<ProjectContainer
					image={tourbuddy}
					title="Tour Buddy"
					description="A platform that seamlessly connects travel enthusiasts to locals for organized adventures and amazing experiences."
					liveSiteLink="https://tourbuddy.onrender.com/"
					githubLink="https://github.com/numofran6/tour-buddy-frontend"
					stack={projectStack.tourBuddy}
				/>

				<ProjectContainer
					image={greenshop}
					title="Green Shop"
					description="A platform aimed at bridging the gap between local fashion designers and their potential customers."
					githubLink="https://github.com/numofran6/Green-Shop"
					liveSiteLink="https://greenshopping.vercel.app/"
					reverse={true}
					stack={projectStack.greenShop}
					box1Width="md:w-1/3"
					box2Width="md:w-2/3"
				/>

				<ProjectContainer
					image={church}
					title="Church Blog"
					description="Played a volunteered role in enhancing my church's branding and advertising efforts by developing a modern and visually appealing web app."
					githubLink="https://github.com/numofran6/church-website"
					liveSiteLink="https://glorioushill.vercel.app/"
					stack={projectStack.church}
					box1Width="md:w-1/2"
					box2Width="md:w-1/2"
				/>

				<ProjectContainer
					image={mobileapp}
					title="Mobile App"
					description="A mobile app that streamlines appointment booking processes, enhances service delivery and manages customers more efficiently."
					githubLink="https://github.com/numofran6/saloon-booking-app"
					liveSiteLink="https://defavouredsaloon.vercel.app/"
					reverse={true}
					stack={projectStack.mobileapp}
				/>
			</div>
		</div>
	);
};
