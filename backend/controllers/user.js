const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');

const {
	createKeyString,
	createSetQuery,
	createValString,
} = require("../helpers");

exports.allUsers = (req, res) => {
     let query = "SELECT * FROM `users`";
    db.query(query, (err, users) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(users);
    });
};


exports.hasAuthorization = (req, res, next) => {
    let sameUser = req.profile && req.auth && req.profile._id == req.auth._id;
    let adminUser = req.profile && req.auth && req.auth.role === 'admin';

    const authorized = sameUser || adminUser;

    if (!authorized) {
        return res.status(403).json({
            error: 'User is not authorized to perform this action'
        });
    }
    next();
};

exports.deleteUser = (req, res, next) => {

    let _id = req.params.userId;
    let auth_id = req.auth._id;
    
    let updateRecordsQuery = `UPDATE records SET postedBy='${auth_id}' WHERE postedBy=${_id}`;
	db.query(updateRecordsQuery, (err, data) => {
		if (err) {
			console.log(err);
		}
	});

    let updatePatientsQuery = `UPDATE patients SET postedBy=${auth_id}  WHERE postedBy=${_id}`;
    console.log(updatePatientsQuery);
	db.query(updatePatientsQuery, (err, data) => {
		if (err) {
            console.log(err);
		}
	});    

	let delQuery = `DELETE FROM users WHERE _id=${_id}`;
	db.query(delQuery, (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}
		return res.status(200).json({
		message: "suuccess",
		});
	});
};

exports.findPeople = (req, res) => {
    let following = req.profile.following;
    following.push(req.profile._id);
    User.find({ _id: { $nin: following } }, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    }).select('name');
};

exports.getUser = (req, res) => {
//    req.profile.password = undefined;
//    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.updateUser = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }
        // save user
        let user = req.profile;
        user = _.extend(user, fields);

        user.updated = Date.now();
        // console.log("USER FORM DATA UPDATE: ", user);

        if (files.photo) {
            //	record.photo.data = fs.readFileSync(files.photo.path);
            //	record.photo.contentType = files.photo.type;
        }
        
        const { _id } = user;
        // delete user._id;
        // delete user.updated;
        // delete user.date;

        //remove uneeded items of object using lodash
        let obj = {...user};
        obj = _.omit(obj, ['_id', 'updated', 'date', 'password', 'role']);

        //create query
        const setQuery = createSetQuery(obj);
        let query = `UPDATE users SET ${setQuery} WHERE _id=${_id}`;

        db.query(query, (err, data) => {
            if (err) {
                return res.status(500).send(err);
            }
        });
            //            let user = JSON.parse(JSON.stringify(data[0]));
        query = "SELECT * FROM `users` WHERE `_id` = '" + _id + "' ";
         db.query(query, (err, data) => {
                if (err) {
                    return res.status(500).send(err);
                }
            res.send(data[0]);
    
            });

        });
}

exports.userById = (req, res, next, id) => {

    let query = "SELECT * FROM `users` WHERE `_id` = '" + id + "' ";
        db.query(query, (err, data) => {
            if (err) {
                return res.status(500).send(err);
            }
            let user = JSON.parse(JSON.stringify(data[0]));
            req.profile = user; // adds profile object in req with user info
            next();
        });
    
};


exports.userPhoto = (req, res, next) => {

    if (req.profile.photo.data) {
        res.set(('Content-Type', req.profile.photo.contentType));
        return res.send(req.profile.photo.data);
    }
    next();
};



