
const express = require("express");
const router = express.Router();
const controller = require('./../controllers/Top_headlines');

router.get('', controller.getTop_HeadLines);

module.exports = router;