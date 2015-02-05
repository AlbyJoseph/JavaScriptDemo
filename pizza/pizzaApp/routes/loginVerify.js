 var express = require('express');
 var router=express.Router();
 var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/pizzaDb', function (error) {
//     if (error) {
//         console.log(error);
//     }
// });
var Schema = mongoose.Schema;
var LoginSchema = new Schema({
    firstname: String,
    lastname:String,
    email: String,
    password: String,
    mobile:Number,
    address:String
},{collection:'userRegister'});

var logUser = mongoose.model('user',LoginSchema);
router.post('/', function (req, res) {
    console.log(req.body.email);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
 logUser.find({email:req.body.email,password:req.body.password}, function (err, docs) {
    console.log("##");
         res.json(docs);
  });
});
module.exports = router;
