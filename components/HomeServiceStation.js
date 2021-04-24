const HomeServiceStation = () => {
	return (
		<div className="lg:pt-40 sm:flex sm:items-center sm:justify-evenly">
			<div className=''>
				<img className='mx-auto w-full' src="/service-station.png" alt="" />
			</div>
			<div className="sm:w-1/2">
				<h1 className="text-primary text-xl mb-3 font-black lg:text-2xl">Service station at your convienience and satisfaction.</h1>
				<p className="mb-7">
					Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies
					ligula sed magna dictum porta. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
					neque, auctor sit amet aliquam velisus.
				</p>
                <a className="flex w-40 text-white text-sm font py-4 pl-7 rounded-lg bg-black hover:opacity-80" href="/#">Learn More <img src="/arrow-right.png" className="ml-3" alt=""/></a>
			</div>
		</div>
	);
};

export default HomeServiceStation;
