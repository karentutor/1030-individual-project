const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const {
	createKeyString,
	createSetQuery,
	createValString,
} = require("../helpers");
const { portfolioQuery, portfolioQueryJoin } = require("../helpers/queries");

exports.createPortfolio = (req, res, next) => {
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

		if (files.photo) {
			//            patient.photo.data = fs.readFileSync(files.photo.path);
			//           patient.photo.contentType = files.photo.type;
		}
		let query = `INSERT INTO portfolio (${keyQuery},postedBy,role) VALUES (${valQuery}, ${postedBy}, '${role}')`;
		
		db.query(query, (err, data) => {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).send(data);
		});
	});
};

exports.deletePortfolio = (req, res) => {
	let _id = req.portfolio.portfolio_id;
	let query = `DELETE FROM portfolio WHERE _id=${_id}`;

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
//		return res.status(200).json({
//			message: "success",
		
	let query1 = "SELECT p._id, p.title, p.description, t.type, p.completed FROM `portfolio` as `p` INNER JOIN `types` as `t` ON t._id=p.type";

	db.query(query1, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(data);
	});
	});
};

exports.getPortfolio = async (req, res) => {

	let query = "SELECT p._id, p.title, p.description, t.type, p.completed FROM `portfolio` as `p` INNER JOIN `types` as `t` ON t._id=p.type";

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

exports.portfolioById = (req, res, next, id) => {
	let query =
		`SELECT ${portfolioQueryJoin}, t.type FROM portfolio as p INNER JOIN types as t ON p.type = t._id WHERE p._id =` +
		id;

	db.query(query, (err, result) => {
		if (err) {
			return res.status(500).send(err);
		} else {
			let data = JSON.parse(JSON.stringify(result[0]));
			req.portfolio = data; // adds profile object in req with user info
			next();
		}
	});
};

exports.singlePortfolio = (req, res) => {
	return res.json(req.portfolio);
};

exports.updatePortfolio = (req, res, next) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Photo could not be uploaded",
			});
		}
		// update patient with corrected fields
		const newHCard = fields.hCard;
		let portfolio = req.portfolio;

		//update patient data with new information -- note only new information 'changed on form frone end' will be updated
		portfolio = _.extend(portfolio, fields);
		portfolio.updated = Date.now();
		const oldHCard = req.portfolio.portfolio_id;

        //remove uneeded items of object using lodash
        let obj = {...portfolio};
        obj = _.omit(obj, ['user_name', 'updated', 'portfolio_id']);
		obj.hCard = newHCard;
		//add and delete extraneous data for creating the sql query
		
		const setQuery = createSetQuery(obj);
		if (files.photo) {
			//	patient.photo.data = fs.readFileSync(files.photo.path);
			//	patient.photo.contentType = files.photo.type;
		}

		//let query = `UPDATE patients SET fName='${fName}', lName='${lName}',gender='${gender}',dob='${dob}',address='${address}',pNumber='${pNumber}',email='${email}',information='${information}', postedBy=${postedBy} WHERE hCard=${patient_id}`;
		let query = `UPDATE portfolio SET ${setQuery} WHERE hCard=${oldHCard}`;
		let query1 = `SELECT * FROM portfolio WHERE hCard=${newHCard}`;

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
