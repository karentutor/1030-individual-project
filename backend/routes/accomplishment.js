const express = require('express');

const {
    accomplishmentById,
    createAccomplishment,
    deleteAccomplishment,
    getAccomplishments,
    singleAccomplishment,
    updateAccomplishment
} = require('../controllers/accomplishment');

const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createAccomplishmentAddtoBody, createAccomplishmentValidator } = require('../validator');

const router = express.Router();

router.get('/accomplishment', getAccomplishments);
router.get('/accomplishment/:accomplishmentId', singleAccomplishment);
router.put('/accomplishment/:accomplishmentId', updateAccomplishment);
router.post('/accomplishment/new/:userId', createAccomplishment);
router.delete('/accomplishment/:accomplishmentId', deleteAccomplishment);
// // // any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// // any route containing :postId, our app will first execute postById()
router.param('accomplishmentId', accomplishmentById);

module.exports = router;