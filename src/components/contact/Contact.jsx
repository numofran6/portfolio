import { useEffect } from 'react';
import gsap from 'gsap';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import resume from '../../assets/file/Numo_Francis_CV.pdf';
import { github, gmail, linkedin, phone } from '../../assets/images/images';

export const Contact = () => {
	const emailAddress = 'numofran6@gmail.com';
	const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
		emailAddress
	)}`;

	useEffect(() => {
		const textContainer = document.querySelector('.text');
		const heading = textContainer.children[0];
		const contentP = textContainer.children[1];
		const contentBtn = textContainer.children[2];

		gsap.delayedCall(1, () => {
			const tl = gsap
				.timeline({
					scrollTrigger: {
						trigger: '#contact-me',
						start: 'top 10%',
						end: 'top top',
						toggleActions: 'play none resume pause',
					},
				})
				.from(heading, {
					duration: 1.2,
					x: -100,
					opacity: 0,
					ease: 'power2.out',
				})
				.from(
					contentP,
					{
						duration: 1.2,
						y: 20,
						opacity: 0,
						ease: 'power2.out',
					},

					0.4
				)
				.from(
					contentBtn,
					{
						duration: 1.2,
						opacity: 0,
						y: 20,
						ease: 'power2.out',
					},
					0.8
				);
		});
	});

	return (
		<div
			id="contact-me"
			className="min-h-screen w-full pt-20 pb-10 flex flex-col justify-between max-w-container"
		>
			<div className="text space-y-7 md:space-y-12">
				<h1 className="section-title">
					Reach Out.<span className="block">Let's Get In Touch !</span>
				</h1>

				<div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:justify-between">
					<div className="flex items-center space-x-4">
						<a href={gmailLink} target="_blank" rel="noreferrer">
							<div className="icon-container">
								<img src={gmail} alt="" className="sm:h-8 sm:w-8 h-5 w-5" />
							</div>
						</a>

						<a
							href="https://linkedin.com/in/numofrancis"
							target="_blank"
							rel="noreferrer"
						>
							<div className="icon-container">
								<img src={linkedin} alt="" className="sm:h-8 sm:w-8 h-5 w-5" />
							</div>
						</a>

						<a
							href="https://github.com/numofran6"
							target="_blank"
							rel="noreferrer"
						>
							<div className="icon-container">
								<img src={github} alt="" className="sm:h-8 sm:w-8 h-5 w-5" />
							</div>
						</a>
					</div>

					<div className="flex items-center space-x-2">
						<img src={phone} alt="" className="h-16 w-16" />
						<div className="font-bold text-lg font-Glimer-Bold">
							<h1>Phone:</h1>
							<h6>+233 50 238 5080</h6>
						</div>
					</div>
				</div>

				<div className="flex">
					<a href={resume} download={resume} target="_blank" rel="noreferrer">
						<button id="download-btn" className="btn-primary">
							<BsFileEarmarkPdf className="mr-2" /> Download Resume
						</button>
					</a>
				</div>
			</div>

			<footer>
				<div className="flex flex-col justify-center max-w-container text-center">
					<div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
						<p className="font-Glimer-Bold text-xs md:text-lg">
							Copyright © 2023. All rights are reserved
						</p>

						<div className="flex text-sm items-center space-x-5 mb-5 md:mb-0">
							<a href="/#about-me" className="footer-link">
								About Me
							</a>

							<a href="/#my-projects" className="footer-link">
								Projects
							</a>

							<a href="/#contact-me" className="footer-link">
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
