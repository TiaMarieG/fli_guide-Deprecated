// Get the express package 
const e = require('express');
const express = require('express');
const mariadb = require('mariadb');


// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Give information to connect to mariadb
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Izzaia8192',
    database: 'fli_guide'
});

// Function that connects to mariadb
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        // Return connection so that it can be used
        return conn;
    } catch (err) {
        console.log ('Error connecting to the database: ' + err)
    }
}

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route, 
app.get('/', (req, res) => {

    // Return home page
    res.render('home');
});

// Define a "default" route, 
app.get('/new-home', (req, res) => {

    // Return home page
    res.render('new-home-test');
});

app.get('/alchemist-guide', (req, res) => {
    res.render('life_guides/alchemist-guide');
});

app.get('/angler-guide', (req, res) => {
    res.render('life_guides/angler-guide');
});

app.get('/artist-guide', (req, res) => {
    res.render('life_guides/artist-guide');
});

app.get('/blacksmith-guide', (req, res) => {
    res.render('life_guides/blacksmith-guide');
});

app.get('/carpenter-guide', (req, res) => {
    res.render('life_guides/carpenter-guide');
});

app.get('/cook-guide', (req, res) => {
    res.render('life_guides/cook-guide');
});

app.get('/farmer-guide', (req, res) => {
    res.render('life_guides/farmer-guide');
});

app.get('/hunter-guide', (req, res) => {
    res.render('life_guides/hunter-guide');
});

app.get('/magician-guide', (req, res) => {
    res.render('life_guides/magician-guide');
});

app.get('/mercenary-guide', (req, res) => {
    res.render('life_guides/mercenary-guide');
});

app.get('/miner-guide', (req, res) => {
    res.render('life_guides/miner-guide');
});

app.get('/paladin-guide', (req, res) => {
    res.render('life_guides/paladin-guide');
});

app.get('/tailor-guide', (req, res) => {
    res.render('life_guides/tailor-guide');
});

app.get('/woodcutter-guide', (req, res) => {
    res.render('life_guides/woodcutter-guide');
});

// Define a "confirm" route, using the POST method
app.post('/confirm', (req, res) => {
    // Get the data from the form that was submitted
    // from the body of the request object
    let details = req.body;

    // Display the confirm page, pass the data
    res.render('confirm', { details: details });
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
