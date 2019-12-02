const express = require('express');
const router = express.Router();
const Mpesa = require('mpesa-node');
const mpesaApi = new Mpesa({ consumerKey: 'ykI0Bl8Rg9i3pKr1xmtphbxHALxi0Z9E', consumerSecret: '9f1GyUEzKEXyXgKa', shortCode: '600111' });



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

// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
mpesaApi
    .c2bSimulate(
        254715024545,
        5,
        'h6dk0Ue2'
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
