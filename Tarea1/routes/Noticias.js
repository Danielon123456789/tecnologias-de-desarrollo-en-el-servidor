const express = require('express');
const router = express.Router();
const controller = require('./../controllers/Noticias')

router.get('', controller.getNotices);

module.exports = router;