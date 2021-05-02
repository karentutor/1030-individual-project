const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const {
	createKeyString,
	createSetQuery,
	createValString,
} = require("../helpers");
const { portfolioQuery, portfolioQueryJoin } = require("../helpers/queries");

exports.getType = async (req, res) => {

	let query = "SELECT * FROM `types` ";

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(data);
	});
};