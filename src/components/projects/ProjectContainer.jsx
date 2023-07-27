import { BsArrowRight, BsGithub } from 'react-icons/bs';

export const ProjectContainer = ({
	image,
	title,
	description,
	githubLink,
	liveSiteLink,
	stack = [],
	reverse = false,
	box1Width = 'md:w-2/5',
	box2Width = 'md:w-3/5',
	imageHeight = 'h-[25rem] md:h-[35rem]',
}) => {
	return (
		<div
			className={`container gap-10 flex flex-col-reverse md:flex-row ${
				reverse && 'md:flex-row-reverse'
			}`}
		>
			<div
				className={`text-container space-y-6 ${box1Width} flex flex-col justify-center ${
					reverse && 'items-end'
				}`}
			>
				<h1 className="hidden-text font-bold font-Glimer-Bold text-4xl">
					<div className="content-line flex items-center 2xl:h-[60px] overflow-hidden">
						<div className="content-line-inner">{title}</div>
					</div>
				</h1>

				<p className={`text-lg  ${reverse && 'text-right'}`}>{description}</p>

				<div
					className={`flex items-center flex-wrap ${reverse && 'justify-end'}`}
				>
					{stack.map((item, i) => (
						<div key={i}>{item}</div>
					))}
				</div>

				<div className="btn-row flex space-x-10 items-center">
					<div className="github-btn">
						<a
							className="icon flex items-center space-x-2 hover:text-[#420fe7]"
							rel="noreferrer"
							target="_blank"
							href={githubLink}
						>
							<h6 className="uppercase text-sm">Code</h6>
							<BsGithub className=" h-7 w-7 hover:-translate-y-1 transition duration-200 ease-in-out repo" />
						</a>
					</div>

					<div className="liveDemo-btn">
						<a
							className="icon flex items-center space-x-2 hover:text-[#420fe7]"
							rel="noreferrer"
							target="_blank"
							href={liveSiteLink}
						>
							<h6 className="uppercase text-sm">Live Site</h6>
							<BsArrowRight className="link h-7 w-7 hover:-rotate-[45deg] transition duration-200 ease-in-out" />
						</a>
					</div>
				</div>
			</div>

			<a
				rel="noreferrer"
				target="_blank"
				href={liveSiteLink}
				className={`${imageHeight} ${box2Width}  relative overflow-hidden img-wrapper`}
			>
				<img
					src={image}
					loading="lazy"
					alt="project cover"
					className="absolute w-full object-cover h-full img bg-gradient-to-r from-purple-50 to-purple-100/50"
				/>
				<div className="img-container absolute top-0 right-0 w-full h-full"></div>
			</a>
		</div>
	);
};
