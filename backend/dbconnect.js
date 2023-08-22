const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_CONNECT_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err.message));

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://thefitnessclub:C55VfsABtoa7VX3r@data.rybmrnf.mongodb.net/?retryWrites=true&w=majority");
        
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;