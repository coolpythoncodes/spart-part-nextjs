import WorkCard from "./WorkCard";

const WorkCards = () => {
	return (
		<div className="sm:flex sm:justify-between">
			<WorkCard>
				Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
				non nulla sit amet nisl tempus convallis quis ac lectus.
			</WorkCard>

			<img
				className="hidden mx-4 w-[3vw] sm:inline-block"
				src="/works-arrow.svg"
				alt=""
			/>

			<WorkCard>
				Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
				non nulla sit amet nisl tempus convallis quis ac lectus.
			</WorkCard>

			<img
				className="hidden mx-4 w-[3vw] sm:inline-block"
				src="/works-arrow.svg"
				alt=""
			/>

			<WorkCard>
				Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
				non nulla sit amet nisl tempus convallis quis ac lectus.
			</WorkCard>
		</div>
	);
};

export default WorkCards;
