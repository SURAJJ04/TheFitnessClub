const mongoose = require('mongoose');


const bookTemp = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    day: {
        type: String
    },
    time: {
        type: String
    }
});


const BookNow = new mongoose.model("Data-all", bookTemp);

module.exports = BookNow;