const mongoose = require('mongoose');

const contactTemp = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const Contact = new mongoose.model("ContactDB", contactTemp);

module.exports = Contact;

