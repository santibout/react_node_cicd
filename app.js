const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.status(200).send('Samuel J. Santibout');
})

app.listen(3000, () => { console.log('cicd tutorial started') })