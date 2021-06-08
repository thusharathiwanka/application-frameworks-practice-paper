import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import VehicleCard from "../components/vehicles/VehicleCard";

const Vehicles = () => {
	const [vehicles, setVehicles] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios.get(`categories/${id}`).then((res) => setVehicles(res.data.vehicles));
	});

	return (
		<div className="container mt-5 mx-auto mx-0">
			<div className="row">
				<h1 className="display-5 text-center mb-5">Vehicles</h1>
				{vehicles.map((vehicle) => {
					return <VehicleCard key={vehicle._id} vehicle={vehicle} />;
				})}
			</div>
			<div className="text-center">
				<Link to="/" className="btn btn-outline-primary mt-4 text-center">
					Back to Categories
				</Link>
			</div>
		</div>
	);
};

export default Vehicles;
