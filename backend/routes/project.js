const express = require('express');

const {
    createProject,
    deleteProject,
    getProjects,
    projectById,
    singleProject,
    updateProject
} = require('../controllers/project');

const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createProjectAddtoBody, createProjectValidator } = require('../validator');

const router = express.Router();

router.get('/project', getProjects);
router.get('/project/new/', createProject);
router.get('/project/:projectId', singleProject);
router.put('/project/:projectId', updateProject);
router.post('/project/new/:userId', createProject);
router.delete('/project/:projectId', deleteProject);
// // any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// // any route containing :postId, our app will first execute postById()
router.param('projectId', projectById);

module.exports = router;