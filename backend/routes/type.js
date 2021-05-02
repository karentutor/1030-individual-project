const express = require('express');

const {
    getType
} = require('../controllers/type');


const router = express.Router();

router.get('/type', getType);



// // portfolio routes
// router.post('/portfolio/new/:userId', requireSignin, createPortfolio);
// router.get('/portfolio/by/:userId', requireSignin, portfolioByUser);
// router.get('/portfolio/:portfolioId', singlePortfolio);
// router.put('/portfolio/:portfolioId', requireSignin, isPoster, updatePortfolio);
// router.delete('/portfolio/:portfolioId', requireSignin, isPoster, deletePortfolio);
// // photo
// router.get('/portfolio/photo/:portfolioId', photo);

// // any route containing :userId, our app will first execute userById()
// router.param('userId', userById);
// // any route containing :postId, our app will first execute postById()
// router.param('portfolioId', portfolioById);

module.exports = router;