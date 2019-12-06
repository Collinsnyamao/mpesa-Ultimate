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
const vars = require('./variables');



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
function lipanampesa(number,amount,reference){
    mpesaApi
        .lipaNaMpesaOnline(
            number,
            amount,
            urla,
            reference
        )
        .then((result) => {
            //do something
            console.log(result);
        })
        .catch((err) => {
            // retry?

            console.log(err);
        });
}

const title3 = 'This title';
router.get('/',function (req,res) {
    res.render('lipanampesa',{ title : vars.title , headtext: vars.headtext, lipa : vars.lipa,hidden_form : '',hidden_requesting : 'hidden'});
});

router.post('/',function (req,res) {

    lipanampesa(req.body.phone,req.body.amount,'eureka');
    res.render('lipanampesa',{ title : vars.title , headtext: 'success', lipa: vars.lipa , hidden_form : 'hidden', hidden_requesting : '', current_status: 'Requesting...'});
});




module.exports = router;
