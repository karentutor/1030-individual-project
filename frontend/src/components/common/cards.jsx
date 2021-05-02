import React, { Component } from "react";
import CardComp from "./card";

const Cards = (props) => {
	const cardDetails = {
		id: 1,
		name: "karen",
		email: "details",
	};

	return (
		<CardComp
			id={cardDetails.id}
			name={cardDetails.name}
			email={cardDetails.email}
		/>
	);
};

export default Cards;
