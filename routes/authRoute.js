const express = require("express")

// import{registerController,
//     LoginController,
//     testController,
//     forgotPasswordController,
// } from '../controllers/authController.js';
// import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const {registerController,
    LoginController,
    testController,
    forgotPasswordController,
} = require("../controllers/authController")
const {isAdmin, requireSignIn} = require("../middlewares/authMiddleware")

const router =express.Router();



router.post('/register',registerController);

router.post('/login', LoginController);
router.post('/forgot-password', forgotPasswordController )

router.get('/test', requireSignIn,isAdmin, testController);

router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok:true});
});

router.get('/admin-auth', requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ok:true});
});


module.exports = router