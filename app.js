const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// "default" route
app.get('/', (req, res) => {

    res.render('home');
});

// Individual categories "home" routes
app.get('/game-breakdown', (req, res) => {
    res.render('game-breakdown');
})

app.get('/life-guides', (req, res) => {
    res.render('life-guides');
})

app.get('/world-of-fli', (req, res) => {
    res.render('world-of-fli');
})

app.get('/quest-guide', (req, res) => {
    res.render('quest-guide');
})

app.get('/fli-story', (req, res) => {
    res.render('fli-story');
})

//Live pages
app.get('/alchemist-guide', (req, res) => {
    res.render('life_guides/alchemist-guide');
})

app.get('/angler-guide', (req, res) => {
    res.render('life_guides/angler-guide');
})

app.get('/artist-guide', (req, res) => {
    res.render('life_guides/artist-guide');
})

app.get('/blacksmith-guide', (req, res) => {
    res.render('life_guides/blacksmith-guide');
})

app.get('/carpenter-guide', (req, res) => {
    res.render('life_guides/carpenter-guide');
})

app.get('/cook-guide', (req, res) => {
    res.render('life_guides/cook-guide');
})

app.get('/farmer-guide', (req, res) => {
    res.render('life_guides/farmer-guide');
})

app.get('/hunter-guide', (req, res) => {
    res.render('life_guides/hunter-guide');
})

app.get('/magician-guide', (req, res) => {
    res.render('life_guides/magician-guide');
})

app.get('/mercenary-guide', (req, res) => {
    res.render('life_guides/mercenary-guide');
})

app.get('/miner-guide', (req, res) => {
    res.render('life_guides/miner-guide');
})

app.get('/paladin-guide', (req, res) => {
    res.render('life_guides/paladin-guide');
})

app.get('/tailor-guide', (req, res) => {
    res.render('life_guides/tailor-guide');
})

app.get('/woodcutter-guide', (req, res) => {
    res.render('life_guides/woodcutter-guide');
})

// Define a "confirm" route, using the POST method
app.post('/confirm', (req, res) => {
    // Get the data from the form that was submitted
    // from the body of the request object
    let details = req.body;

    // Display the confirm page, pass the data
    res.render('confirm', { details: details });
})

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
