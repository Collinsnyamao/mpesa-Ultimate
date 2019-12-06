const express = require('express');
const router = express.Router();
const Mpesa = require('mpesa-node');
const bodyParser = require('body-parser');

router.get('/',function (req,res) {
    console.log(req.body);
    res.send('mpesa api');
});

router.post('/',function (req,res) {
    console.log('1111111 :',bodyParser.json(req.body));

    res.send('mpesa api');
});




module.exports = router;
