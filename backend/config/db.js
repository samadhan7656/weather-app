const mongoose = require('mongoose');
const dotenv = require('dotenv');

const MONGO_URI="mongodb+srv://samadhanshinde9850:MiFT92xN1A1wWiD3@samdhanzeotapweather.wi4j9.mongodb.net/?retryWrites=true&w=majority&appName=samdhanZeotapWeather"

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;