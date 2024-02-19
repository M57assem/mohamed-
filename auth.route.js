const express = require('express');
const router = express.Router();


const as= require('../controller/auth.controller')
const {SignupValidator ,LoginValidator} = require('../utilis/Validators/AuthValidator')


router.route('/')
.get(as.GetUsers);
router.route('/Signup')
.post(SignupValidator ,as.signup)
router.route('/login')
.post(LoginValidator,as.login)


module.exports = router;