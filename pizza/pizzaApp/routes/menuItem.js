 var express = require('express');
 var router=express.Router();
 var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/pizzaDb', function (error) {
//     if (error) {
//         console.log(error);
//     }
// });
var Schema = mongoose.Schema;
var MenuSchema = new Schema({
    itemname: String,
    category:String,
    size: String,
    price: Number,
    Ingredients:String,
    image:String
},{collection:'items'});

var menu = mongoose.model('menu',MenuSchema);
router.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
 menu.find({}, function (err, docs) {
    console.log("###");
         res.json(docs);
  });
});
module.exports = router;
