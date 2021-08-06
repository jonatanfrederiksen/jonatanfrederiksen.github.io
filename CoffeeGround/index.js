const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const CoffeePlace = require('./models/coffeeplace')

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

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', async (req, res) => {
    res.render('home', {})
})

app.get('/cafes', async (req, res) => {
    const cafes = await CoffeePlace.find({})
    res.render('coffeeplaces/index', { cafes })
})

//New route
app.get('/cafes/new', async (req, res) => {
    res.render('coffeeplaces/new');
})

//create route
app.post('/cafes', async (req, res) => {
    const newCafe = new CoffeePlace(req.body);
    await newCafe.save();
    res.redirect(`/cafes/${newCafe._id}`)
})

// show route (by id)
app.get('/cafes/:id', async (req, res) => {
    const cafe = await CoffeePlace.findById(req.params.id);
    res.render('coffeeplaces/show', { cafe });
})





app.listen(8080, () => {
    console.log('serving port 8080')
})