import Head from "next/head";
import { useEffect, useState } from "react";
import HelpingHands from "../components/HelpingHands";
import HomeContact from "../components/HomeContact";
import HomeFooter from "../components/HomeFooter";
import HomeNavbar from "../components/HomeNavbar";
import HomeServiceStation from "../components/HomeServiceStation";
import HomeShowCase from "../components/HomeShowCase";
import NavBar from "../components/NavBar";
import NavLinks from "../components/NavLinks";
import Testimonial from "../components/Testimonial";

export default function Home() {
	const [deviceWidth, setDeviceWidth] = useState(0);
	const breakpoint = 767;

	// useEffect(() => {
	// 	setDeviceWidth(window.innerWidth);
	// 	const handleWindowResize = () => setDeviceWidth(window.innerWidth);
	// 	window.addEventListener("resize", handleWindowResize);
	// 	return () => window.removeEventListener("resize", handleWindowResize);
	// }, []);

	const mobileNavLinksComponent = (
		<div>
			<NavLinks navLink="Company" color="#033C49" />
			<NavLinks navLink="About" color="#033C49" />
			<NavLinks navLink="Support" color="#033C49" />
			<NavLinks navLink="Download App" color="#033C49" />
		</div>
	);

	const desktopNavLinksComponent = (
		<div>
			<NavLinks navLink="Company" color="#033C49" />
			<NavLinks navLink="About" color="#033C49" />
			<NavLinks navLink="Support" color="#033C49" />
			{/* <li><NavBarButton text='Download App' color='#F8F8F8' backgroundColor='#F9811E' /></li> */}
		</div>
	);
	return (
		<div className="bg-[#e5e5e5] font-mulish">
			<Head>
				<title>Spare Parts - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div className="w-11/12 m-auto"> */}
				<HomeNavbar/>
			{/* </div> */}
			<HomeShowCase />
			<div className="w-11/12 m-auto">
				<HelpingHands />
				<HomeServiceStation />
				<Testimonial />
				<HomeContact />
				<HomeFooter />
			</div>

			{/* <NavBar>
				{deviceWidth <= breakpoint ? mobileNavLinksComponent : desktopNavLinksComponent}
			</NavBar> */}
		</div>
	);
}
