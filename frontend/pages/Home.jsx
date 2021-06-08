import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/categories/CategoryCard";
import axios from "axios";

const Home = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get("/categories")
			.then((res) => {
				setCategories(res.data.categories);
			})
			.catch((error) => console.log(error.message));
	}, []);

	return (
		<div className="row container-lg mx-auto mt-5 px-0">
			<h1 className="display-5 text-center mb-5">All Categories</h1>
			{categories.map((category) => {
				return <CategoryCard category={category} key={category._id} />;
			})}
			<div className="text-center mt-5">
				<Link to="/vehicles/rent" className="btn btn-primary mt-4">
					Rent a Vehicle
				</Link>
			</div>
		</div>
	);
};

export default Home;
