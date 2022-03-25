const express = require('express')
const router = express.Router();
const Results = require('../models/Results');
const { body, validationResult } = require('express-validator');
var fetchAdmin = require('../middleware/fetchAdmin');
var fetchUsers = require('../middleware/fetchUsers');



//ROUTE 1: Get all the notes using : Get"/api/results/getallresults": login required
router.get('/getallresults', fetchAdmin, async(req, res) => {
    try {
        const result = await Results.find({ admin: req.admin.id })
        return res.json(result)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



//ROUTE 2: Add a new question using POST : Get"/api/results/addresult": login required
router.post('/addresult', fetchUsers, [
    body('totalquestion'),
    body('attempted', ),
    body('unattempted', ),
    body('score', )

], async(req, res) => {
    try {
        const { totalquestion, attempted, unattempted, score } = req.body;
        //If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const result = new Results({
            totalquestion,
            attempted,
            unattempted,
            score,

        })
        const savedresult = await result.save();
        res.json(savedresult);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})




module.exports = router