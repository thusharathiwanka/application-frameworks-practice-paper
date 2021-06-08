import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const VehicleRentForm = ({ setIsSubmitted, setTotal }) => {
	const [vehicleOptions, setVehicleOptions] = useState([]);
	const [categoryOptions, setCategoryOptions] = useState([]);
	const [rental, setRental] = useState({});

	useEffect(() => {
		axios
			.get("/categories")
			.then((res) => {
				setCategoryOptions(
					res.data.categories.map((category) => {
						return { value: category._id, label: category.name };
					})
				);
			})
			.catch((error) => console.log(error.message));
	}, []);

	const handleCategoryOptions = (e) => {
		setRental({ ...rental, type: e.target.value });

		axios
			.get(`/categories/${e.target.value}`)
			.then((res) => {
				setVehicleOptions(
					res.data.vehicles.map((vehicle) => {
						return {
							value: vehicle._id,
							label: vehicle.model + " " + vehicle.name,
						};
					})
				);
			})
			.catch((error) => console.log(error.message));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(rental);
		axios
			.post("/categories/calculate", rental)
			.then((res) => {
				console.log(res);
				setTotal(res.data.charges);
				setIsSubmitted(true);
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div className="container-lg mt-5">
			<h1 className="display-5 text-center mb-5">Rent a Vehicle</h1>
			<form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
				<div className="row">
					<div className="mb-3 col">
						<label htmlFor="passMark" className="form-label">
							Duration (Days)
						</label>
						<input
							type="number"
							className="form-control"
							id="passMark"
							value={rental.duration}
							onChange={(e) =>
								setRental({ ...rental, duration: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="row">
					<div className=" mb-3 col">
						<label className="form-label">Select Category</label>
						<select
							className="form-select"
							aria-label="Default select example"
							onChange={handleCategoryOptions}
						>
							<option value="" disabled selected>
								Select
							</option>
							{categoryOptions.map((categoryOption) => {
								return (
									<option value={categoryOption.value}>
										{categoryOption.label}
									</option>
								);
							})}
						</select>
					</div>
					<div className=" mb-3 col">
						<label className="form-label">Select Vehicle</label>
						<select
							className="form-select"
							aria-label="Default select example"
							onChange={(e) =>
								setRental({ ...rental, vehicle: e.target.value })
							}
						>
							<option value="" disabled selected>
								Select
							</option>
							{vehicleOptions.map((vehicleOption) => {
								return (
									<option value={vehicleOption.value}>
										{vehicleOption.label}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default VehicleRentForm;
