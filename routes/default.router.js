const router = require('express').Router();
const defaultCtrl = require('../controllers/default.ctrl');

router.get('/', defaultCtrl.get);
router.get('/health', defaultCtrl.health);

module.exports = router;