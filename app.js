// Get the express package 
const express = require('express');
const mariadb = require('mariadb');
let life = "";

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
    life = "alchemist";
    res.render('life_guides/alchemist-guide');
});

app.get('/angler-guide', (req, res) => {
    life = "angler";
    res.render('life_guides/angler-guide');
});

app.get('/artist-guide', (req, res) => {
    life = "artist";
    res.render('life_guides/artist-guide');
});

app.get('/blacksmith-guide', (req, res) => {
    life = "blacksmith";
    res.render('life_guides/blacksmith-guide');
});

app.get('/carpenter-guide', (req, res) => {
    life = "carpenter";
    res.render('life_guides/carpenter-guide');
});

app.get('/cook-guide', (req, res) => {
    life = "cook";
    res.render('life_guides/cook-guide');
});

app.get('/farmer-guide', (req, res) => {
    life = "farmer";
    res.render('life_guides/farmer-guide');
});

app.get('/hunter-guide', (req, res) => {
    life = "hunter";
    res.render('life_guides/hunter-guide');
});

app.get('/magician-guide', (req, res) => {
    life = "magician";
    res.render('life_guides/magician-guide');
});

app.get('/mercenary-guide', (req, res) => {
    life = "mercenary";
    res.render('life_guides/mercenary-guide');
});

app.get('/miner-guide', (req, res) => {
    life = "miner";
    res.render('life_guides/miner-guide');
});

app.get('/paladin-guide', (req, res) => {
    life = "paladin";
    res.render('life_guides/paladin-guide');
});

app.get('/tailor-guide', (req, res) => {
    life = "tailor";
    res.render('life_guides/tailor-guide');
});

app.get('/woodcutter-guide', (req, res) => {
    life = "woodcutter";
    res.render('life_guides/woodcutter-guide');
});

// Define a "confirm" route, using the POST method
app.post('/submitted-recipes', async (req, res) => {

    const conn = await connect();
    const data = req.body;

    await conn.query(`INSERT INTO missing_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num) VALUES ("${life}","${data.recipe_name}", "${data.main_resource}", ${data.main_quantity}, "${data.sec_resource}", ${data.sec_quantity}, "${data.opt_reagent}", ${data.opt_quantity})`);

     const results = await conn.query ('SELECT * FROM missing_recipes');

    // Display the confirm page, pass the data
    res.render('submitted-recipes', { details: data, submissions : results });
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
