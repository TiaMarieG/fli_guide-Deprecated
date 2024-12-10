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
    password: '611795',
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

// Creating gets to the different pages
// For each page, it saves or rewrites the value of the life you are on to use for the database
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
    res.render('life_guides/blacksmith-guide', {errors : [] });
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
app.post('/missing-recipes', async (req, res) => {
    // Establish a connection to the database
    const conn = await connect();
    // Retrieve the data sent in the POST request body
    const data = req.body;

    // Sanitize and handle empty inputs by assigning default values
    const recipeName = data.recipe_name || null; // Use NULL for empty string fields
    const mainResource = data.main_resource || null;
    const mainQuantity = parseInt(data.main_quantity, 10) || 0; // Default to 0 for numeric fields
    const secResource = data.sec_resource || null;
    const secQuantity = parseInt(data.sec_quantity, 10) || 0;
    const optReagent = data.opt_reagent || null;
    const optQuantity = parseInt(data.opt_quantity, 10) || 0;

    // Insert the sanitized data into the "missing_recipes" table using a parameterized query
    await conn.query(
        `INSERT INTO missing_recipes 
        (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [life, recipeName, mainResource, mainQuantity, secResource, secQuantity, optReagent, optQuantity]
    );

    // Query all data from the "missing_recipes" table to show updated entries
     const results = await conn.query ('SELECT * FROM missing_recipes');

    // Render the "missing-recipes" template and pass the form data and query results to it
    res.render('missing-recipes', { details: data, submissions : results });
});

app.post('/submitted-recipes', async (req, res) => {
    // Establish a connection to the database
    const conn = await connect();
    // Retrieve the recipe name from the POST request body    
    const data = req.body.recipe_name;

    // Validate the input to ensure it is not invalid or empty
    let isValid = true;
    let errors = [];

    // If the user selected "none", mark the input as invalid
    if (data === "none") {
        isValid = false;
    }

    // If the input is invalid, render the "uh-oh" error page and stop further processing
    if (!isValid) {
        res.render('uh-oh');
        return;
    }

    // Query the "crafting_recipes" table for recipes that match the submitted name
    const results = await conn.query(`SELECT * FROM crafting_recipes WHERE item_name LIKE CONCAT('%', ?, '%')`,
    [data]);

    // Render the "submitted-recipes" template and pass the first matched result (details) 
    // and all query results (submissions) to the template
    res.render('submitted-recipes', { details: results[0], submissions : results });
});

// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
