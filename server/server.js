const express = require('express');
const pgp = require('pg-promise')();
const bcrypt = require('bcrypt');
const PORT = 3000;
const saltRounds = 8;
require('dotenv').config();
const dbUrl = process.env.DB_KEY; 
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin:'https://translator-app-jade.vercel.app'})); 


app.use(express.urlencoded({ extended: true }));


const db = pgp(dbUrl); 

app.use(express.static('public'));

app.get('/heartbeat', (req, res) => {
    res.send('hello')
});


app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
         await db.one(`
            INSERT INTO translateusers (name, email, password) 
            VALUES ($1, $2, $3) 
            RETURNING id`, [name, email, hashedPassword]);
        console.log('new registered user');
        res.json('you are registered!');

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await db.oneOrNone('SELECT * FROM translateusers WHERE email = $1', email);
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.json('Login successful');
            } else {
                res.status(401).send('Invalid password');
            }
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).send('Error authenticating user');
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});

