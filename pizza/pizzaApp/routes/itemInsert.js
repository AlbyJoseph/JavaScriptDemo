var express = require('express');
var mongoose = require('mongoose');
var router=express.Router();

var Schema = mongoose.Schema;
var ItemSchema = new Schema({
   itemname      : String,
   category      : String,
   size          : String,
   price         : Number,
   ingredients   :  String,
   image         : String
   
}, { collection: 'items'});
 var item = mongoose.model('itemname', ItemSchema);
    router.post('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   var post = new item(req.body);

//save model to MongoDB
   post.save(function (err) {
    if (err) {
       return err;
 }
 else {
   console.log("Post saved");
 }
});
  
  
});
  
module.exports=router;