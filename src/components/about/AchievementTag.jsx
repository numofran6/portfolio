export const AchievementTag = ({ icon, description }) => {
	return (
		<div className="bg-white shadow min-h-[15rem] w-full p-5 flex flex-col justify-center space-y-3 hover:bg-purple-50 transition-all ease-in-out duration-500">
			<div className="text-[#420fe7]">{icon}</div>
			<p className="text-sm">{description}</p>
		</div>
	);
};
