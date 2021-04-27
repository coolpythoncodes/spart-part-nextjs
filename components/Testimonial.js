import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
const Testimonial = () => {
	return (
		<div className="mx-auto container my-20 sm:max-w-md lg:max-w-xl">
			<h1 className="text-center text-3xl mb-4 sm:text-4xl font-bold">
				What our clients say
			</h1>
			<div className="bg-primary rounded-xl pt-8">
				<img className="mx-auto rounded-full" src="/client.png" alt="" />
				<div className="flex ml-[5%] pt-4 sm:ml-0 sm:ml-[10%] sm:pt-8">
					<span className=" -mt-10  text-9xl text-white">“</span>
					<p className="text-white font-normal w-3/4 text-sm ">
						Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
						Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
					</p>
				</div>

				<div className="flex pt-4 pb-8 justify-center items-center sm:pt-0">
					<ChevronLeftIcon className="text-white h-8 mr-4" />
					<span className="inline-block bg-white w-2 h-2 rounded-full"></span>
					<span className="inline-block mx-8 bg-white w-2 h-2 rounded-full"></span>
					<span className="inlinejdjdjdn-block bg-white w-2 h-2 rounded-full"></span>
					<ChevronRightIcon className="text-white h-8 ml-4" />
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
