import React, { useState } from "react";
import VehicleForm from "../components/vehicles/VehicleForm";

const AddVehicle = () => {
	const [isAdded, setIsAdded] = useState(false);
	return (
		<div className="container-lg">
			<h1 className="display-5 text-center my-5">Add Vehicle</h1>
			<VehicleForm setIsAdded={setIsAdded} />
			{isAdded && (
				<div class="alert alert-success w-75 mx-auto mt-5" role="alert">
					Vehicle added successfully.
				</div>
			)}
		</div>
	);
};

export default AddVehicle;
