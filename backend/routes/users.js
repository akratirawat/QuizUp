const express = require('express')
const router = express.Router();
const Users = require('../models/Users');
const { body, validationResult } = require('express-validator');
var fetchAdmin = require('../middleware/fetchAdmin');


//ROUTE 1: Get all the users using : Get"/api/users/getallusers": login required
router.get('/fetchallusers', fetchAdmin, async(req, res) => {
        try {
            const users = await Users.find({ admin: req.admin.id })
            return res.json(users)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    //ROUTE 2: Add a new user using POST : Get"/api/users/adduser": login required
router.post('/adduser', fetchAdmin, [
    body('username', 'Enter a valid username').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be of atleast 5 characters ').isLength({
        min: 5,
    }),
], async(req, res) => {
    try {
        const { username, email, password } = req.body;
        //If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = new Users({
            username,
            email,
            password,
            admin: req.admin.id
        })
        const saveduser = await user.save();
        res.json(saveduser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})






module.exports = router