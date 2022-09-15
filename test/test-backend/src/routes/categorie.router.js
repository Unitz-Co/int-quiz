const router = require('express').Router();
const categorie = require('../controllers/categorie.controllers');

router.get('/', categorie.getAllCategorie);
router.post('/', categorie.createCategorie);
router.get('/:key', categorie.searchCategorie);

module.exports = router;
