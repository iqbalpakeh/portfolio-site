import React from "react";

const ItemPage = props => {
	return (
		<div>
			<h1>Portfolio {props.match.params.id}</h1>
			<p>This is my portfolio number {props.match.params.id}</p>
		</div>
	);
};

export default ItemPage;
