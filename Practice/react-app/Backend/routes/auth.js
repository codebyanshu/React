const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');




// Create a user using POST "/api/auth". Does't required auth
router.post('/',[
    body('name',"Enter a valid Name").isLength({min : 3}),
    body('password',"Enter a valid password,it must be atleast 4 character").isLength({min : 4}),
    body('email',"Enter a valid email").isEmail(),
] ,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array()});
    } 

User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
}).then(user => res.json(user))
.catch(err =>{
    console.log(err);
    res.json({error : "Please enter valid data",message : err.message });
})

})

module.exports = router