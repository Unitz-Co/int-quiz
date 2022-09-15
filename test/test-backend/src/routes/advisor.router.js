const router = require('express').Router();
const advisor = require('../controllers/advisor.controllers');

router.get('/', advisor.getAllAdvisors);
router.post('/', advisor.createAdvisor);
router.get('/:key', advisor.searchAdvisor);
// router.get('/:cateName', advisor.searchAdvisorCategories);

module.exports = router;
