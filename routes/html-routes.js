
// DEPENDENCIES ---------------------
const express = require("express");
const fs = require('fs');
const router = express.Router();
// ---------------------------------^

// ROUTES -----------------------------------------------------------------------------
//index
router.get('/', (req, res) => {
    res.send('public/index.html');
});

//stats
router.get('/stats', (req, res) => {
    fs.readFile('public/stats.html', 'utf8', (err, response) => {
        if (err) throw err;
        else res.send(response);
    });
});

//exercise
router.get('/exercise', (req, res) => {
    fs.readFile('public/exercise.html', 'utf8', (err, response) => {
        if (err) throw err;
        else res.send(response);
    });
});
// -----------------------------------------------------------------------------------^

module.exports = router;