import React, { useState } from "react";
import VehicleRentForm from "../components/vehicles/VehicleRentForm";

export const RentVehicle = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [total, setTotal] = useState(0);

	return (
		<div className="container-lg">
			<VehicleRentForm setIsSubmitted={setIsSubmitted} setTotal={setTotal} />
			{isSubmitted && (
				<div class="alert alert-success w-75 mx-auto mt-5" role="alert">
					Your request has been submitted and your total charges will be Rs.
					{total}
				</div>
			)}
		</div>
	);
};
