import { useState } from "react";
import { insuranceDetails } from "../insuranceInfo";
import InsuranceCard from "./InsuranceCard";

const InsuranceCards = () => {
	const [insuranceItems, setInsuranceItems] = useState(insuranceDetails);
	const handleClick = (id) => {
		setInsuranceItems(insuranceItems.map((item) => (item.active = false)));
		setInsuranceItems(
			insuranceItems.map((item) => {
				if (item.id === id) {
					item.active = !item.active;
				}
				return item;
			})
		);
	};
	return (
		<div className="sm:flex sm:justify-between lg:justify-evenly">
			{insuranceItems.map(
				({ id, packageName, amount, packageDetails, active }) => {
					return (
						<InsuranceCard
							key={id}
							insurancePackage={packageName}
							amount={amount}
							active={active}
							handleClick={() => handleClick(id)}
						>
							{packageDetails}
						</InsuranceCard>
					);
				}
			)}
		</div>
	);
};

export default InsuranceCards;
