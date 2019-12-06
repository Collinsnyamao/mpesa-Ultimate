const express = require('express');
const router = express.Router();
const Mpesa = require('mpesa-node');

router.get('/',function (req,res) {
    console.log(req.body);
    res.send('mpesa api');
});

router.post('/',function (req,res) {
    console.log('1111111 :',req.body.ResultCode);
    console.log('222222 :',req.body.stkCallback.ResultCode);

    res.send('mpesa api');
});




module.exports = router;
