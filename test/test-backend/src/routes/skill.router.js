const router = require('express').Router();
const skill = require('../controllers/skill.controllers');

router.get('/', skill.getAllSkill);
router.post('/', skill.createSkill);
router.get('/:key', skill.searchSkill);

module.exports = router;
