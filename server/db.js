const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const mongoURI = "mongodb+srv://jrajanrajaversion1_db_user:hod2oOwWeId6RnFL@cluster0.ndvh625.mongodb.net/stayhealthybeta1?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {

    try {

        await mongoose.connect(mongoURI);

        console.log("Connected to Mongo Successfully");

    } catch (error) {

        console.error(error);

    }
};

module.exports = connectToMongo;