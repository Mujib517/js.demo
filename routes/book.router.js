const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book.ctrl');

router.get('/', bookCtrl.get);
router.get('/:id', bookCtrl.getById);
router.post('/', bookCtrl.post);
router.delete('/:id', bookCtrl.remove);
router.put('/:id', bookCtrl.update);

module.exports = router;