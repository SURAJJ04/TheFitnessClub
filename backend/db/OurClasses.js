const mongoose = require('mongoose');

const classDBTemp = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },

});

const ClassDB = new mongoose.model("ClassesDB", classDBTemp);

module.exports = ClassDB;