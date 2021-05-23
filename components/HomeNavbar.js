import styled from "styled-components";

const HomeNavbar = ({ onToggle, menuToggle }) => {
	return (
		<div
			className=" z-50 bg-[#e5e5e5] fixed w-full pb-3
          pt-3"
		>
			<div className="w-11/12 sm:w-[84%] mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">Logo</div>
				<div className="sm:flex">
					<NavLinks
						style={{ transform: menuToggle ? "translate(0)" : null }}
						className="sm:flex sm:items-center sm:w-56 sm:mr-16 lg:w-72 lg:mr-24 sm:justify-between"
					>
						<NavLinkItem>
							<a className="text-primary" href="/#">
								Company
							</a>
						</NavLinkItem>
						<NavLinkItem>
							<a className="text-primary" href="/#">
								About
							</a>
						</NavLinkItem>
						<NavLinkItem>
							<a className="text-primary" href="/#">
								Support
							</a>
						</NavLinkItem>
						<NavLinkItem>
							<a className="sm:hidden text-primary" href="/#">
								Download App
							</a>
						</NavLinkItem>
					</NavLinks>
					<a
						className="hidden bg-[#F9811E] text-white w-36 sm:flex justify-center h-12 items-center rounded-3xl"
						href="/#"
					>
						Download App
					</a>
				</div>
				<div
					className={`sm:hidden menu-btn ${menuToggle ? "close" : null}`}
					onClick={onToggle}
				>
					<div className="menu-btn-line "></div>
					<div className="menu-btn-line "></div>
					<div className="menu-btn-line "></div>
					{/* <div className="w-8 h-1 mb-2 bg-black"></div>
                <div className="w-8 h-1 mb-2 bg-black"></div> */}
				</div>
			</div>
		</div>
	);
};

export default HomeNavbar;

const NavLinks = styled.ul`
	@media only screen and (max-width: 640px) {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 70%;
		background: #e5e5e5;
		padding: 80px 30px;
		z-index: 99999;
		border-right: 1px solid #ccc;
		transform: translate(-100%);
		/* transform: translateX(100px); */
		transition: transform 0.5s ease-in-out;
	}
`;

const NavLinkItem = styled.li`
	@media only screen and (max-width: 640px) {
		padding: 20px 10px;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		&:last-child {
			border-bottom: none;
		}
	}
`;
