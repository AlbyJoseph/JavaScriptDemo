var express = require('express');
var mongoose = require('mongoose');
var router=express.Router();

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    user      : Object,
    items     : Object,
    amount    : Number,
    date      : Date
       
}, { collection: 'order'});
 var order = mongoose.model('orders', OrderSchema);
    router.post('/', function (req, res) {
      console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   var post = new order(req.body);

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