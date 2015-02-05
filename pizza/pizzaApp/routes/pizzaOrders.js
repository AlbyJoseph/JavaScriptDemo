 var express = require('express');
 var router=express.Router();
 var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/pizzaDb', function (error) {
//     if (error) {
//         console.log(error);
//     }
// });
var Schema = mongoose.Schema;
var orderSchema = new Schema({
    user      : Object,
    items     : Object,
    amount    : Number,
    date      : Date
},{collection:'order'});

var order = mongoose.model('viewOrder',orderSchema);
router.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
 order.find({}, function (err, docs) {
    console.log("###");
         res.json(docs);
  });
});
module.exports = router;
