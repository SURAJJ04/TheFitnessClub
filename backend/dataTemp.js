const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const bookNowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
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
    service: {
        type: String,
    }
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
    message: {
        type: String
    }
});

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
})

const Login = new mongoose.model("LoginDB", loginSchema);
const Contact = new mongoose.model("ContactDB", contactTemp);
const ClassDB = new mongoose.model("ClassesDB", classDBTemp);
const BookNow = new mongoose.model("BookNow-Data", bookNowSchema);

module.exports = BookNow;
module.exports = ClassDB;
module.exports = Contact;
module.exports = Login;