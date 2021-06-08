import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./nav/Navbar";
import axios from "axios";
import Vehicles from "../pages/Vehicles";
import AddVehicle from "../pages/AddVehicle";
import { RentVehicle } from "../pages/RentVehicle";

axios.defaults.baseURL = "http://localhost:5000/";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/vehicles/create">
					<AddVehicle />
				</Route>
				<Route exact path="/vehicles/rent">
					<RentVehicle />
				</Route>
				<Route exact path="/:id">
					<Vehicles />
				</Route>
				<Route exact path="*">
					<div className="text-center mt-5">
						<h1 className="display-5">404 Error</h1>
						<Link to="/" className="btn btn-primary mt-4">
							Back to Home
						</Link>
					</div>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
