const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const {
	createKeyString,
	createSetQuery,
	createValString,
} = require("../helpers");

exports.createRecord = (req, res, next) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Image could not be uploaded",
			});
		}

		/*		if (files.photo) {
			//            patient.photo.data = fs .readFileSync(files.photo.path);
			//           patient.photo.contentType = files.photo.type;
		}
*/
		const { body, postedBy, title } = fields;
		console.table(req.patient);
		const patientId = req.patient.patient_id;
		let query =
			"INSERT INTO `records` (hcNum, title, body, postedBy) VALUES ('" +
			patientId +
			"', '" +
			title +
			"', '" +
			body +
			"', '" +
			postedBy +
			"')";

		console.log(query);
		db.query(query, (err, data) => {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.status(200).send({ message: 'Record updated'});
				
			}
		});
	});
};

exports.deleteRecord = (req, res) => {

	const _id = req.params.recordId;
	let query = `DELETE FROM records WHERE _id=${_id}`;

	console.log(query);

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		return res.status(200).json({
			message: "success",
		});
	});
};

exports.getRecords = async (req, res) => {

	const _id = req.params.patientId;

	let query = `SELECT * FROM records WHERE hcNum=${_id} ORDER BY updated DESC`;

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(data);
	});
};

exports.recordById = (req, res, next) => {

	const _id = req.params.recordId;


	let query = "SELECT r._id as record_id, r.title, r.body, r.postedBy, r.created, r.updated, u.fName, p.lName as patient_lastName  FROM `records` as `r` INNER JOIN `users` as `u` ON r.postedBy = u._id INNER JOIN patients as p ON r.hcNum = p.hCard WHERE r._id=" +_id;

	db.query(query, (err, result) => {

		if (err) {
			return res.status(500).send(err);
		} 
		else {
			let data = JSON.parse(JSON.stringify(result[0]));
			res.status(200).json(data);
		}
	});
};

exports.updateRecord = (req, res, next) => {

	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Photo could not be uploaded",
			});
		}
		const _id = req.params.recordId;
		const setQuery = createSetQuery(fields);
		let query = `UPDATE records SET ${setQuery} WHERE _id=${_id}`;
		db.query(query, (err, data) => {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).send(data);
		});
	}); //end form parse
};
