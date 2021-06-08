import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
	return (
		<div className="col-sm-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{category.name}</h5>
					<p className="card-text">Rs.{category.rent}</p>
					<Link to={category._id} className="btn btn-outline-primary">
						View Vehicles
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
