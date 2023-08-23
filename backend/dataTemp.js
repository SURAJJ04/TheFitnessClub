const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const allData = new mongoose.Schema({
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
    },
    service: {
        type: String
    },
    message: {
        type: String
    }
});

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

const contactTemp = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

});

const BookNow = new mongoose.model("Data-all", allData);
const Contact = new mongoose.model("ContactDB", contactTemp);
const ClassDB = new mongoose.model("ClassesDB", classDBTemp);

module.exports = BookNow;
module.exports = ClassDB;
module.exports = Contact;