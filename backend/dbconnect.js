const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/The_Fitness_Club", {
    usenewurlparser: true,
    useunifiedtopology: true,
    family: 4
}).then(() => console.log("DB Connected")).catch((err) => console.log(err));