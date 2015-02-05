var express = require('express');
var mongoose = require('mongoose');
var router=express.Router();
mongoose.connect('mongodb://localhost/pizzaDb', function (error) {
    if (error) {
        console.log(error);
    }
});
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:String,
    lastname:String,
    email: String,
    password: String,
    mobile:Number,
    address:String
},{collection:'userRegister'});

var regUser = mongoose.model('Register',UserSchema);
router.post('/', function (req, res) {
	console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var post=new regUser(req.body);
    post.save(function (err) {
 if (err) {
       return err;
 }
 else {

   console.log("Post saved");
 }
});
 });
//var post=new regUser({firstname:req.body.fname,lastname:req.body.lname,email:req.body.email,password:req.body.password,mobile:req.body.mobile,address:req.body.address});
  	//var post=new regUser({firstname:"Alby",lastname:"Joseph",email:"alby@gmail.com",password:"jesus",mobile:"8912347632",address:"Thamarassery"});
  	

module.exports = router;