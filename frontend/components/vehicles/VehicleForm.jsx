import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
let options = [];

const VehicleForm = ({ setIsAdded }) => {
	const [vehicle, setVehicle] = useState({});
	const [selectedCategories, setSelectedCategories] = useState([]);

	useEffect(() => {
		axios
			.get("/categories")
			.then((res) => {
				options = res.data.categories.map((category) => {
					return { value: category._id, label: category.name };
				});
			})
			.catch((error) => console.log(error.message));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		vehicle.categories = selectedCategories.map((category) => {
			return category.value;
		});

		axios
			.post("/vehicles", vehicle)
			.then((res) => {
				setIsAdded(true);
				setVehicle({});
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
			<div className="row">
				<div className="mb-3 col">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Code
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={vehicle.code}
						onChange={(e) => setVehicle({ ...vehicle, code: e.target.value })}
					/>
				</div>
				<div className="mb-3 col">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Model
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						value={vehicle.model}
						onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
					/>
				</div>
			</div>
			<div className="row">
				<div className="mb-3 col">
					<label htmlFor="passMark" className="form-label">
						Type
					</label>
					<input
						type="text"
						className="form-control"
						id="passMark"
						value={vehicle.type}
						onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
					/>
				</div>
				<div className="mb-3 col">
					<label htmlFor="lecturerInCharge" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="lecturerInCharge"
						value={vehicle.name}
						onChange={(e) =>
							setVehicle({
								...vehicle,
								name: e.target.value,
							})
						}
					/>
				</div>
			</div>
			<div className="row">
				<div className=" mb-3 col">
					<label className="form-label">Select Categories</label>
					<Select
						isMulti
						name="options"
						options={options}
						className="basic-multi-select"
						classNamePrefix="select"
						onChange={setSelectedCategories}
					/>
				</div>
			</div>
			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
};

export default VehicleForm;
