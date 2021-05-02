const express = require('express');
const router = express.Router();

router.post("/patientsummary/search", (req, res) => {
    console.log('POST request with health card number...');
    db.query(`SELECT * FROM patients WHERE hCard="${req.body.hCard}"`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json(results); 
    });
});

// The fun way to do it in MySQL
router.get("/patientsummary/profile/:hCard", (req, res) => {
    console.log('GET request with id received...');
    db.query(`SELECT CAST(dob AS DATE) AS dob, CONCAT(SUBSTR(dob,1,4), '/', SUBSTR(dob,6,2), '/', SUBSTR(dob,9,2)) AS dob, fName, lName, hCard, email, information, address, gender, DATE_FORMAT(FROM_DAYS(DATEDIFF(now(), dob)), '%Y')+0 AS age, CONCAT('(', SUBSTR(pNumber,1,3), ') ', SUBSTR(pNumber,4,3), '-', SUBSTR(pNumber,7,4)) AS pNumber FROM patients WHERE hCard="${req.params.hCard}"`, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json(results); 
    });
});

module.exports = router;