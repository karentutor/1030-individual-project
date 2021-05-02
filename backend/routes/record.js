const express = require('express');

const {
    createRecord,
    deleteRecord,
    getRecords,
    recordById,
    updateRecord
} = require('../controllers/record');


const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { patientById } = require('../controllers/patient');
const { createRecordValidator } = require('../validator');

const router = express.Router();

router.get('/records/:patientId', getRecords);
router.get('/record/:recordId', recordById);
router.delete('/record/:recordId', deleteRecord);
router.put('/record/:recordId', updateRecord);
router.post('/record/new/:patientId', createRecord);

// any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// any route containing :postId, our app will first execute postById()
router.param('patientId', patientById);
// any route containing :recordId, our app will first execute userById()
router.param('userId', recordById);


module.exports = router;


