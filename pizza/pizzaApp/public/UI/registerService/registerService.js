angular.module('pizzaApp').factory('registerService',function($http) {

	var registerService = {
    itemData:{},
    deliveryAddress:{},
    cartNo : 0,
    logStatus : [],
    cartData : [],  
		get:function(user,callback){
			console.log(user); 
           $http({ method:'POST',
                               data:user,
                                headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/registration'                                
                       }).success(function (data) {  

                   callback(data);                
               });
               },
        getLogin:function(login,callback){
			console.log("##regservice");
			console.log(login); 
           $http({ method:'POST',
					data:login,
					headers:{'Content-Type': 'application/json; charset=UTF-8'},
                    url:'http://localhost:3000/loginVerify'                                
                       }).success(function (data) {  
                      console.log("##");
                    console.log(data);
                   callback(data);                
               });
               },
        insertItem:function(item,callback){
			console.log(item); 
           $http({ method:'POST',
                               data:item,
                                headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/itemInsert'                                
                       }).success(function (data) {  

                   callback(data);                
               });
               },
            getMenu:function(callback){
            $http({ method:'GET',
						headers:{'Content-Type': 'application/json; charset=UTF-8'},
                    url:'http://localhost:3000/menuItem'                                
                       }).success(function (data) {  
                      console.log("##");
                    console.log(data.itemname);
                   callback(data);                
               });
               },
               setItem:function(item){
                registerService.itemData = item;
                console.log("setItem");
                console.log(item);  
                //console.log(registerService.itemData);
               },
               setDeliveryAddress:function(address){
                registerService.deliveryAddress = address;
                console.log(registerService.deliveryAddress);
               },
               getItem:function(callback){
               callback(registerService.itemData);

               },
               getDeliveryAddress:function(callback){
               callback(registerService.deliveryAddress);

               },
               insertOrder:function(item,callback){
                console.log("insertOrder",item); 
                $http({ method:'POST',
                               data:item,
                                headers: {'Content-Type': 'application/json'},
                               url:'http://localhost:3000/orderInsert'                                
                       }).success(function (data) {  

                   callback(data);                
               });
               },
               setCartItem:function(item){
                registerService.cartData[registerService.cartNo - 1] = item;
                console.log("CartData");
                console.log(item);  
                
               },
               setCartNo:function(){
                registerService.cartNo = registerService.cartNo + 1;
                console.log("cartno:",registerService.cartNo);
                
               },
               getCartNo:function(callback){
               callback(registerService.cartNo);
               },
               getCartItem:function(callback){
                callback(registerService.cartData);
               },
               setLoginStatus:function(loginData){
               registerService.logStatus = loginData;
               
               },
               getLoginStatus:function(callback){
               callback(registerService.logStatus);
               },
               getOrders:function(callback){
            $http({ method:'GET',
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
                    url:'http://localhost:3000/pizzaOrders'                                
                       }).success(function (data) {  
                      console.log("##");
                    console.log(data);
                   callback(data);                
               });
               },
               unsetLoginStatus:function(){
               registerService.logStatus = "";
               
               }
       };

	return registerService;
});