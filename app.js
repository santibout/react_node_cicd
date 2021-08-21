const express = require('express');
const app = express();

const path = require('path');

const whitelist = ['http://localhost:3000', 'https://cicd-tutorial-dude.herokuapp.com/'];
const corsOptions = {
    origin: (origin, cb) => {
        console.log('** Origin of request ** ' + request);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log('Origin Acceptable');
            cb(null, true);
        } else {
            console.log('Origin Rejected');
            cb(new Error('Not allowed by cors'));
        }
    }
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join)(__dirname, 'client/build', 'index.html');
    })
}

app.get('/names', (req, res) => {
    res.status(200).send('Samuel J. Santibout');
})

app.listen(3000, () => { console.log('cicd tutorial started') })