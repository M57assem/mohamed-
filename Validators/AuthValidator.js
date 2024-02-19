const {check} = require('express-validator');
const ErrorValidation = require('../../middleware/ErrorValidation');
exports.SignupValidator = [
    check('Name')
    .notEmpty().withMessage('Name is required')
    .isLength({min:3}).withMessage('Name is too short')
    .isLength({max:10}).withMessage('Name is too long '),





   check('Email')
.   notEmpty().withMessage('Email is required'),







    check('Password')
    .notEmpty().withMessage('Password is required')
    .isLength({min:8}).withMessage('Password is too short')
    .isLength({max:16}).withMessage('Password is too long ')
    .custom((password, { req }) => {
      if (password !== req.body.confirmPassword) {
        throw new Error('Password Confirmation incorrect');
      }
      return true;
    }),
       
      
    
    



    check('confirmPassword')
    .notEmpty().withMessage('ConfirmPassword is required'),






    check('Height')
    .notEmpty().withMessage('Height is required')
    .isLength({min:1}).withMessage('Height is too short')
    .isLength({max:3}).withMessage('Height is too long '),



    check('Lenght')
    .notEmpty().withMessage('Lenght is required')
    .isLength({min:1}).withMessage('Lenght is too short')
    .isLength({max:3}).withMessage('Lenght is too long' ),
    ErrorValidation
    ];




    exports.LoginValidator = [



        check('Email')
        .notEmpty().withMessage('Email is required'),
         check('Password')
        .notEmpty().withMessage('Password is required'),


        ErrorValidation

    ]
