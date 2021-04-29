const InsuranceCard = ({
	insurancePackage,
	amount,
	children,
	active,
	handleClick,
}) => {
    const styles = {divClass : "select-none cursor-pointer shadow-insuranceBox mt-14 text-center h-[550px] rounded-lg pt-20 sm:w-[30%] lg:w-72"}
	return (
		<div className={`${styles.divClass} ${active ? 'bg-[#0091B2]' : 'bg-white'}`} onClick={handleClick} active={active}>
			<h4 className={`text-4xl font-bold leading-[157%] ${active ? 'text-white' : 'text-black'}`}>{insurancePackage}</h4>
			<h2 className={`text-5xl font-extrabold leading-[157%] ${active ? 'text-white' : 'text-black'}`}>{`N ${amount}`}</h2>
            <p className={`text-sm font-normal leading-5 mt-12 w-[80%] mx-auto ${active ? 'text-white' : 'text-black'}`}>{children}</p>
            <button className="mt-24 rounded-md text-[#0091B2] w-[133px] h-12 bg-white focus:outline-none border-0 focus:ring-0">Select</button>
		</div>
	);
};

export default InsuranceCard;
