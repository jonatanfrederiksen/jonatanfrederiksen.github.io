const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeplaceSchema = new Schema({
    title: String,
    description: String,
    location: String
});

module.exports = mongoose.model('CoffeePlace', coffeeplaceSchema);