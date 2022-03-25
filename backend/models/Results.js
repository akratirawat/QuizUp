const mongoose = require('mongoose');
const { Schema } = mongoose;
const ResultsSchema = new Schema({

    totalquestion: {
        type: String,
        required: true
    },
    attempted: {
        type: String,
        required: true
    },
    unattempted: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});
//user is the model name here and Userschema is the name of the schema which we are sending 
module.exports = mongoose.model('results', ResultsSchema)