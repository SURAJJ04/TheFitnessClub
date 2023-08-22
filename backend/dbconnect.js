const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_CONNECT_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err.message));

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://thefitnessclub:9mkNKI9Rq7oACKBC@thefitnessclub .otrkdta.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;