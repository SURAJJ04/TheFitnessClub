require('../backend/dbconnect');
const exp = require('constants');
const hbs = require('hbs');
const express = require('express');
const bcrypt = require('bcryptjs');

const app = express();

const path = require('path');
const BookNow = require('../backend/dataTemp');
const ClassDB = require('../backend/dataTemp');
const Contact = require('../backend/dataTemp');
const Login = require('../backend/dataTemp');

// Paths
const staticPath = path.join(__dirname, '../public');
const pagesPath = path.join(__dirname, '../public/pages');
const viewPath = path.join(__dirname, "../views");
const partialPath = path.join(__dirname, "../views");

app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/booknow", async (req, res) => {
    try {
        const data = new BookNow({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            day: req.body.day,
            time: req.body.time
        })
        await data.save();
        res.render("bookingSuccess", {
            bookingMsg: "Booking Succsesful",
            greeting: "Thank you for booking, The Fitness Club team will contact you shortly"
        });

    } catch (error) {
        console.log(error);
        res.render("bookingError", {
            err: error
        });
    }
});

app.post("/HIIT", async (req, res) => {
    try {
        const data = new ClassDB({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            time: req.body.hiittime,
            service: req.body.service
        });

        const temp = await data.save();
        res.render("bookingSuccess", {
            bookingMsg: "Booking Succsesful",
            greeting: "Thank you for booking, The Fitness Club team will contact you shortly"
        })

    } catch (error) {
        res.render("bookingError", {
            err: error
        });
    }
});

app.post("/strength", async (req, res) => {
    try {
        const data = new ClassDB({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            time: req.body.hiittime,
            service: req.body.service
        });

        const temp = await data.save();
        res.render("bookingSuccess", {
            bookingMsg: "Booking Succsesful",
            greeting: "Thank you for booking, The Fitness Club team will contact you shortly"
        })

    } catch (error) {
        res.render("bookingError", {
            err: error
        });
    }
});


app.post("/endurance", async (req, res) => {
    try {
        const data = new ClassDB({
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            time: req.body.hiittime,
            service: req.body.service
        });

        const temp = await data.save();
        res.render("bookingSuccess", {
            bookingMsg: "Booking Succsesful",
            greeting: "Thank you for booking, The Fitness Club team will contact you shortly"
        })

    } catch (error) {
        res.render("bookingError", {
            err: error
        });
    }
});

app.post("/contact", async (req, res) => {
    try {
        const data = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await data.save();
        res.render("bookingSuccess", {
            bookingMsg: "Thanks for your response our team will reply soon",
            greeting: ""
        })
    } catch (error) {

    }
})

app.get("/thefitnessclubadmin", (req, res) => {
    res.render("login");
})

app.listen(4040, () => {
    console.log("Server : 4040");
})