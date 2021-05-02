const express = require('express');

const {
    comment,
    createPortfolio,
    deletePortfolio,
    getPortfolio,
    isPoster,
    photo,
    portfolioById,
    portfolioByUser,
    singlePortfolio,
    uncomment,
    updateComment,
    updatePortfolio
} = require('../controllers/portfolio');

const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createPortfolioAddtoBody, createPortfolioValidator } = require('../validator');

const router = express.Router();

router.get('/portfolio', getPortfolio);



// // portfolio routes
// router.post('/portfolio/new/:userId', requireSignin, createPortfolio);
// router.get('/portfolio/by/:userId', requireSignin, portfolioByUser);
// router.get('/portfolio/:portfolioId', singlePortfolio);
// router.put('/portfolio/:portfolioId', requireSignin, isPoster, updatePortfolio);
 router.delete('/portfolio/:portfolioId', requireSignin, deletePortfolio);
// // photo
// router.get('/portfolio/photo/:portfolioId', photo);

// // any route containing :userId, our app will first execute userById()
// router.param('userId', userById);
// // any route containing :postId, our app will first execute postById()
router.param('portfolioId', portfolioById);

module.exports = router;