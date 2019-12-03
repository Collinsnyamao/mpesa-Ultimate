const express = require('express');
const router = express.Router();
const Mpesa = require('mpesa-node');
const mpesaApi = new Mpesa({
    consumerKey: 'ykI0Bl8Rg9i3pKr1xmtphbxHALxi0Z9E',
    consumerSecret: '9f1GyUEzKEXyXgKa',
    shortCode: '600172',
    initiatorName: 'testapi',
    lipaNaMpesaShortCode: 174379,
    lipaNaMpesaShortPass: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
    securityCredential: 'Safaricom1720!'
});



/*new Mpesa({
    consumerKey: '<your consumer key>',
    consumerSecret: '<your consumer secret>',
    environment: 'sandbox',
    shortCode: '600111',
    initiatorName: 'Test Initiator',
    lipaNaMpesaShortCode: 123456,
    lipaNaMpesaShortPass: '<some key here>',
    securityCredential: '<credential here>',
    certPath: path.resolve('keys/myKey.cert')
})*/
const urla = "http://157.230.233.236:3000/callback";
// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
mpesaApi
    .lipaNaMpesaOnline(
        254715024545,
        5,
        urla,
        'test'
    )
    .then((result) => {
        //do something
        console.log(result);
    })
    .catch((err) => {
        // retry?

        console.log(err);
    });

router.get('/',function (req,res) {
    res.send('mpesa api');
});




module.exports = router;
