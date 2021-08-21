const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');

// const whitelist = ['http://localhost:3000', 'https://cicd-tutorial-dude.herokuapp.com/'];
// const corsOptions = {
//     origin: (origin, cb) => {
//         console.log('** Origin of request ** ' + origin);
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             console.log('Origin Acceptable');
//             cb(null, true);
//         } else {
//             console.log('Origin Rejected');
//             cb(new Error('Not allowed by cors'));
//         }
//     }
// };

// app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
    })
};

app.get('/', (req, res) => {
    res.send('/nothing to show at the home root.  Use /names instead')
});

app.get('/names', (req, res) => {
    res.status(200).send('Samuel J. Santibout');
});

app.listen(process.env.PORT || 3000, () => { console.log('cicd tutorial started') });