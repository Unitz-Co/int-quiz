const router = require('express').Router();
const service = require('../controllers/service.controllers');

router.get('/', service.getAllService);
router.post('/', service.createService);
router.get('/:key', service.searchService);

module.exports = router;
