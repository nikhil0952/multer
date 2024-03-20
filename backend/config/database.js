const mongoose = require("mongoose");

require('dotenv').config();

const dbconnect = async () => {
    await mongoose.connect(process.env.DATABASE_URL)

        .then(() => { console.log("Successfully DB Connected!!!"); })
        .catch((error) => {
            console.log("Recieved an Error!!!!");
            console.error(error);
            process.exit(1);
        });
}

module.exports = dbconnect;
