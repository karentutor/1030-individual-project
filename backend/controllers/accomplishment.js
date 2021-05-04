const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const {
	createKeyString,
	createSetQuery,
	createValString,
} = require("../helpers");
const { accomplishmentQuery, accomplishmentQueryJoin } = require("../helpers/queries");

exports.createAccomplishment = (req, res, next) => {

	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		console.log(err);
		if (err) {
			return res.status(400).json({
				error: "Image could not be uploaded",
			});
		}

		const keyQuery = createKeyString(fields);
		const valQuery = createValString(fields);
		const postedBy = req.profile._id;
		const role = req.profile.role;

		
		let query = `INSERT INTO accomplishments (${keyQuery},postedBy,role) VALUES (${valQuery}, ${postedBy}, '${role}')`;
		
		db.query(query, (err, data) => {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).send(data);
		});
	});
};

exports.deleteAccomplishment = (req, res) => {

	const _id = req.accomplishment._id;

	let query = `DELETE FROM accomplishments WHERE _id=${_id}`;

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
//		return res.status(200).json({
//			message: "success",
		
	let query1 = "SELECT a._id, a.title, a.description, t.type, a.completed FROM `accomplishments` as `a` INNER JOIN `types` as `t` ON t._id=a.type";

	db.query(query1, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(data);
	});
	});
};

exports.getAccomplishments = async (req, res) => {


	let query = "SELECT a._id, a.title, a.description, t.type, a.completed, a.role FROM `accomplishments` as `a` INNER JOIN `types` as `t` ON t._id=a.type";

    console.log(query);
	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(data);
	});
};

// exports.isPoster = (req, res, next) => {
// 	let sameUser =
// 		req.patient && req.auth && req.patient.postedBy == req.auth._id;
// 	let adminUser = req.patient && req.auth && req.auth.role === "admin";
// 	let isPoster = sameUser || adminUser;

// 	if (!isPoster) {
// 		return res.status(403).json({
// 			error: "User is not authorized",
// 		});
// 	}
// 	next();
// };

exports.photo = (req, res, next) => {
	res.set("Content-Type", req.patient.photo.contentType);
	//return res.status(404);
	return send(req.patient.photo.data);
};

// exports.patientsByUser = (req, res) => {
// 	//	let postedBy = req.profile._id;
// 	//	console.log('called');
// 	let postedBy = req.profile._id;
// 	let query =
// 		`SELECT ${patientQueryJoin}, u.fName FROM patients as p INNER JOIN users as u on p.postedBy = u._id WHERE p.postedBy = '` +
// 		postedBy +
// 		"'";
// 	db.query(query, (err, data) => {
// 		if (err) {
// 			return res.status(500).send(err);
// 		}
// 		res.status(200).json(data);
// 	});
// };

exports.accomplishmentById = (req, res, next, id) => {
	let query =
		`SELECT ${accomplishmentQueryJoin}, t.type  from accomplishments as a INNER JOIN types as t on a.type = t._id WHERE a._id =` +
		id;

	db.query(query, (err, result) => {
		if (err) {
			return res.status(500).send(err);
		} else {
			let data = JSON.parse(JSON.stringify(result[0]));
			req.accomplishment = data; // adds profile object in req with user info
			next();
		}
	});
};

exports.singleAccomplishment = (req, res) => {
	return res.json(req.accomplishment);
};

exports.updateAccomplishment = (req, res, next) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Photo could not be uploaded",
			});
		}
		// update patient with corrected fields
		let accomplishment = req.accomplishment;

		const _id = req.accomplishment._id;

	// update patient data with new information -- note only new information 'changed on form frone end' will be updated
		accomplishment = _.extend(accomplishment, fields);
		let dt = new Date();
		accomplishment.updated = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

	// 	//remove uneeded items of object using lodash
	let obj = { ...accomplishment };
	obj = _.omit(obj, ['created']);
	
	// 	add and delete extraneous data for creating the sql query
		
	const setQuery = createSetQuery(obj);
	// 	// 	if (files.photo) {
	// 	// 		//	patient.photo.data = fs.readFileSync(files.photo.path);
	// 	// 		//	patient.photo.contentType = files.photo.type;
	// 	// 	}

		let query = `UPDATE accomplishments SET ${setQuery} WHERE _id=${_id}`;
	 	let query1 = `SELECT * FROM accomplishments WHERE _id=${_id}`;
		db.query(query, (err, data) => {
			if (err) {
				return res.status(500).send(err);
			} else {
				db.query(query1, (err, data) => {
					if (err) {
						return res.status(500).send(err);
					} else {
						return res.status(200).send(JSON.stringify(data[0]));
					}
				});
			}
		});
	}); //end form parse
};
