const express = require('express')
const router = express.Router();
const Feedbacks = require('../models/Feedbacks');
const { body, validationResult } = require('express-validator');
var fetchAdmin = require('../middleware/fetchAdmin');
var fetchUsers = require('../middleware/fetchUsers');

//ROUTE 1: Get all the feedback using : Get"/api/feedbacks/getallfeedbacks": login required
router.get('/getallfeedbacks', fetchAdmin, async(req, res) => {
    try {
        const feedbacks = await Feedbacks.find({ admin: req.admin.id })
        return res.json(feedbacks)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//ROUTE 2: Add a new question using POST : Get"/api/feedbacks/addfeedback": login required
router.post('/addfeedback', fetchUsers, [
    body('msg', )
], async(req, res) => {
    try {
        const { msg } = req.body;
        //If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const feedback = new Feedbacks({
            msg,

        })
        const savedfeedback = await feedback.save();
        res.json(savedfeedback);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router