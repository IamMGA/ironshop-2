const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.index);

router.get('/new', productsController.new);
router.post('/', productsController.create);

router.get('/:id/edit', productsController.edit);
router.post('/:id', productsController.update);

router.get('/:id', productsController.show);

router.post('/:id/delete', productsController.delete);

module.exports = router;