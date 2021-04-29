import { CogIcon } from "@heroicons/react/solid";

const WorkCard = ({ children }) => {
	return (
		<div className="bg-[#ECECEC] pt-10 pb-12 mt-8 sm:w-[30%]">
			<CogIcon className="h-16 mx-auto mb-8" />
			<p className="w-4/5 mx-auto">{children}</p>
		</div>
	);
};

export default WorkCard;
