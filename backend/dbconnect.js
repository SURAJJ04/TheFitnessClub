const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECT_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err));