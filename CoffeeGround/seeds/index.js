const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const CoffeePlace = require('../models/coffeeplace');

mongoose.connect('mongodb://localhost:27017/coffee-ground', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await CoffeePlace.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random = Math.floor(Math.random() * 1000);
        const c = new CoffeePlace({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random].city}, ${cities[random].state}`
        })
        await c.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});