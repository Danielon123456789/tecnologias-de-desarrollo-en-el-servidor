
const express = require('express');
const router = express.Router();
const controller = require('./../controllers/Lista_de_fuentes')

router.get('', controller.getSources);

module.exports = router;