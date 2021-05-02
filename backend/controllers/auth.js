const jwt = require("jsonwebtoken");

require("dotenv").config();
const expressJwt = require("express-jwt");
const _ = require("lodash");
// Import module into the application
const crypto = require("crypto");
// Creating salt for all users
let salt = process.env.SALT;
const { createKeyString, createValString } = require('../helpers');

hashPassword = (password) => {
	return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
};

exports.signup = (req, res, next) => {
	
	const email = req.body.email;
	//has password
	let _pass = req.body.password;
	const password = hashPassword(_pass);
	req.body.password = password;
	
	const fields = req.body;

	const keyQuery = createKeyString(fields);
	const valQuery = createValString(fields);


	//Check if email exists
	let query = "SELECT * FROM `users` where email='" + email + "'";

	db.query(query, (err, result) => {
		if (err) {
			return res.status(500).send(err);
		} else if (result.length >= 1) {
			res
				.status(400)
				.send({ error: "User already exists.  Please try a different email" });
		} else {
			query =
				`INSERT INTO users (${keyQuery}) VALUES (${valQuery})`;
			db.query(query, (err, result) => {
				if (err) {
					return res.status(500).send(err);
				}
				res.status(200).send(result);
			});
		}
	});
};

exports.signin = (req, res) => {
	// find the user based on email
	const { email, password } = req.body;

	let _password = hashPassword(password);

	let query =
		"SELECT * FROM `users` WHERE email = '" +
		email +
		"' AND password ='" +
		_password +
		"'";

	db.query(query, (err, result) => {
		if (result.length === 0) {
			return res
				.status(404)
				.send({ error: "Username or password is incorrect" });
		}
		let user = result[0];
		if (err) {
			return res.status(500).send(err);
		}
		// generate a token with user id and secret
		const token = jwt.sign(
			{ _id: user._id, role: user.role },
			process.env.JWT_SECRET
		);
		// persist the token as 't' in cookie with expiry date
		res.cookie("t", token, { expire: new Date() + 9999 });
		// retrun response with user and token to frontend client
		const { _id, name, email, role } = user;
		return res.json({ token, user: { _id, email, name, role } });
	});
};

exports.signout = (req, res) => {
	res.clearCookie("t");
	return res.json({ message: "Signout success!" });
};

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET,
	userProperty: "auth",
});
