import { GoVerified } from 'react-icons/go';
import { GiCash } from 'react-icons/gi';
import { FaPeopleCarry } from 'react-icons/fa';
import { FcWorkflow } from 'react-icons/fc';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuRightAlt } from 'react-icons/cg';
import { github, gmail, linkedin } from '../../assets/images/images';
import resume from '../../assets/file/Numo_Francis_CV.pdf';
import { AchievementTag } from './AchievementTag';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const skills = [
		'React.js',
		'Node.js',
		'Redux',
		'TypeScript',
		'Storybook',
		'Jest',
	];

	const emailAddress = 'numofran6@gmail.com';
	const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
		emailAddress
	)}`;

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="max-w-container"
			id="about-me"
		>
			<nav className="fixed inset-x-0 bg-gradient-to-r from-purple-50 to-purple-50 z-40">
				<div className="flex justify-between items-center h-[4rem] max-w-container">
					<a href="/#about-me" className="text-[#420fe7] font-Glimer-Heavy">
						{'< '}Numo{' />'}
					</a>

					<div className="hidden md:flex items-center space-x-10 text-[#420fe7]">
						<a href="/#about-me" className="nav-link">
							<p>About</p>
						</a>
						<a href="/#my-projects" className="nav-link">
							<p>Projects</p>
						</a>
						<a href="/#contact-me" className="nav-link">
							<p>Contact Me</p>
						</a>
					</div>

					<div className="md:hidden">
						<button onClick={() => setOpenMenu(true)}>
							<CgMenuRightAlt className="text-[#420fe7] w-7 h-7" />
						</button>
					</div>

					{openMenu && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black z-50 text-[#420fe7] p-10"
						>
							<div className="flex justify-end">
								<button onClick={() => setOpenMenu(false)}>
									<AiOutlineClose className="w-10 h-10 text-white" />
								</button>
							</div>

							<div className="lg:hidden flex flex-col items-center justify-center h-[90%] text-2xl font-semibold space-y-10">
								<a
									href="/#about-me"
									onClick={() => setOpenMenu(false)}
									className="text-4xl font-Glimer-Medium"
								>
									<p>About</p>
								</a>
								<a
									href="/#my-projects"
									onClick={() => setOpenMenu(false)}
									className="text-4xl font-Glimer-Medium"
								>
									<p>Projects</p>
								</a>
								<a
									href="/#contact-me"
									onClick={() => setOpenMenu(false)}
									className="text-4xl font-Glimer-Medium"
								>
									<p>Contact Me</p>
								</a>
							</div>
						</motion.div>
					)}
				</div>
			</nav>

			<div className="lg:grid lg:grid-cols-2 lg:gap-10 min-h-screen pt-[5.8rem]">
				<div className="space-y-5">
					<h1 className="section-title">Front-End Developer</h1>

					<p className="font-Glimer-Regular">
						Hi, I'm Numo Francis. <span className="highlight">Expert</span> in
						crafting and implementing{' '}
						<span className="highlight">software solutions</span> that{' '}
						<span className="highlight">address unique challenges</span> and
						measurably impact the bottom line.
					</p>

					<div className="flex items-center flex-wrap space-y-2 lg:space-y-0">
						{skills.map((skill) => (
							<p className="bg-gradient-to-r from-purple-50 to-purple-50 p-2 text-[#420fe7] font-semibold px-4 rounded-full text-[0.8rem] mr-2">
								{skill}
							</p>
						))}
					</div>

					<div className="flex items-center space-x-4">
						<a
							href="https://linkedin.com/in/numofrancis"
							target="_blank"
							rel="noreferrer"
						>
							<div className="icon-container">
								<img src={linkedin} alt="" className="h-8 w-8" />
							</div>
						</a>

						<a
							href="https://github.com/numofran6"
							target="_blank"
							rel="noreferrer"
						>
							<div className="icon-container">
								<img src={github} alt="" className="h-8 w-8" />
							</div>
						</a>

						<a href={gmailLink} target="_blank" rel="noreferrer">
							<div className="icon-container">
								<img src={gmail} alt="" className="h-8 w-8" />
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

				<div className="lg:ml-10 lg:mt-5">
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
							icon={<FaPeopleCarry className="h-8 w-8" />}
							description={
								'Experienced team lead, coordinated tasks and ensured project requirements were met.'
							}
						/>
						<AchievementTag
							icon={<FcWorkflow className="h-8 w-8" />}
							description={
								'Simplified complex workflows by leveraging modularization and best practices in React.'
							}
						/>
					</div>
				</div>
			</div>
		</motion.header>
	);
};
