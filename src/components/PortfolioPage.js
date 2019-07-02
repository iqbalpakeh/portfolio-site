import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
	return (
		<div>
			<h1>My Work</h1>
			<p>Checkout the following things I've done</p>
			<Link to="/portfolio">Item One</Link>
			<Link to="/portfolio">Item Two</Link>
		</div>
	);
};

export default PortfolioPage;
