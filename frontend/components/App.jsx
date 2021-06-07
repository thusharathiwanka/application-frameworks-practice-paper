import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./nav/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<h1 className="text-center">App</h1>
			</Switch>
		</Router>
	);
};

export default App;
