const express = require('express') 
const router = express.Router();
const controller = require('./../controllers/users')
const authMiddleware = require("./../middlewares/auth")
 
router.get('', authMiddleware ,controller.getUsers)

router.get('/:id', authMiddleware ,controller.getSingleUser)


module.exports = router;

