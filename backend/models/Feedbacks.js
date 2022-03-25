const mongoose = require('mongoose');
const { Schema } = mongoose;
const FeedbacksSchema = new Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admins'
    },


    msg: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});
//user is the model name here and Userschema is the name of the schema which we are sending 
module.exports = mongoose.model('feedbacks', FeedbacksSchema)