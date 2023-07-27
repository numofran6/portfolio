import { GoVerified } from 'react-icons/go';
import { GiBriefcase, GiCash } from 'react-icons/gi';
import { FaPeopleCarry } from 'react-icons/fa';
import { FcWorkflow } from 'react-icons/fc';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { SiGooglemessages } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { github, gmail, linkedin } from '../../assets/images/images';
import resume from '../../assets/file/Numo_Francis_CV.pdf';
import { AchievementTag } from './AchievementTag';

export const About = () => {
	const emailAddress = 'numofran6@gmail.com';
	const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
		emailAddress
	)}`;

	return (
		<header className="max-w-container" id="about-me">
			<nav className="fixed inset-x-0 bg-[#fcfcfc] flex justify-end items-center space-x-10 h-[4rem] z-50 max-w-container">
				<a href="/#about-me" className="nav-link">
					<AiFillHome className="w-6 h-6" />
				</a>
				<a href="/#my-projects" className="nav-link">
					<GiBriefcase className="w-7 h-7" />
				</a>
				<a href="/#contact-me" className="nav-link">
					<SiGooglemessages className="w-6 h-6" />
				</a>
			</nav>

			<div className="grid grid-cols-2 gap-10 min-h-screen pt-[5.8rem] pb-10">
				<div className="space-y-5">
					<h1 className="section-title">Front-End Developer</h1>

					<p className="font-Glimer-Regular">
						Hi, I'm Numo Francis. <span className="highlight">Expert</span> in
						crafting and implementing{' '}
						<span className="highlight">software solutions</span> that{' '}
						<span className="highlight">address unique challenges</span> and
						measurably impact the bottom line.
					</p>

					<div className="flex items-center space-x-4">
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

						<a href={gmailLink} target="_blank" rel="noreferrer">
							<div className="icon-container">
								<img src={gmail} alt="" className="sm:h-8 sm:w-8 h-5 w-5" />
							</div>
						</a>
					</div>

					<div className="flex">
						<a href={resume} download={resume} target="_blank" rel="noreferrer">
							<button id="download-btn" className="btn-primary">
								<BsFileEarmarkPdf className="mr-2" /> Download Resume
							</button>
						</a>
					</div>
				</div>

				<div className="ml-10 mt-5">
					<div className="grid grid-cols-2 gap-2">
						<AchievementTag
							icon={<GiCash className="h-8 w-8" />}
							description={
								'Proven track record of utilizing React to develop high-performing software that generates revenue.'
							}
						/>
						<AchievementTag
							icon={<GoVerified className="h-8 w-8" />}
							description={
								'Solved complex problems with creativity by adapting to the ever-changing needs of a project.'
							}
						/>
						<AchievementTag
							icon={<FcWorkflow className="h-8 w-8" />}
							description={
								'Simplified complex workflows by leveraging modularization and best practices in React.'
							}
						/>
						<AchievementTag
							icon={<FaPeopleCarry className="h-8 w-8" />}
							description={
								'Experienced team lead, coordinated tasks and ensured project requirements were met.'
							}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
