
const express = require('express')
const {Login, Dashboard, register}= require('../controllers/main')
const router = express.Router();
const authenticationMiddleware =require('../middleware/auth')

router.route('/dashboard').get(authenticationMiddleware,Dashboard);
router.route('/login').post(Login);



module.exports = router