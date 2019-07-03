import React from "react";

const ItemPage = props => {
	return (
		<div>
			<h1>A thing I've done</h1>
			<p>This is my portfolio number {props.match.params.id}</p>
		</div>
	);
};

export default ItemPage;
