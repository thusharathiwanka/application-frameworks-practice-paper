import React from "react";

const VehicleCard = ({ vehicle }) => {
	return (
		<div className="col-sm-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{vehicle.code}</h5>
					<p className="card-text">{`${vehicle.model} ${vehicle.name}`}</p>
				</div>
			</div>
		</div>
	);
};

export default VehicleCard;
