import Head from "next/head";
import { useState } from "react";
import HelpingHands from "../components/HelpingHands";
import HomeContact from "../components/HomeContact";
import HomeFooter from "../components/HomeFooter";
import HomeNavbar from "../components/HomeNavbar";
import HomeServiceStation from "../components/HomeServiceStation";
import HomeShowCase from "../components/HomeShowCase";
import Testimonial from "../components/Testimonial";

export default function Home() {
	const [menuToggle, setmenuToggle] = useState(false);
	const onToggle = () => {
		setmenuToggle(!menuToggle);
	};

	return (
		<div className="bg-[#e5e5e5] font-mulish">
			<Head>
				<title>Spare Parts - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeNavbar menuToggle={menuToggle} onToggle={onToggle} />
			<HomeShowCase />
			<div className="w-11/12 m-auto">
				<HelpingHands />
				<HomeServiceStation />
				<Testimonial />
				<HomeContact />
				<HomeFooter />
			</div>
		</div>
	);
}
