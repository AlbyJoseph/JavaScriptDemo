angular.module('pizzaApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('homeCtr/homeCtr.html',
    "<div class=col-md-12 ng-controller=HomectrCtrl><a href=\"\">Menu</a>&nbsp;&nbsp;&nbsp; <a href=#/signUp>Register</a>&nbsp;&nbsp;&nbsp; <a href=#/login>Login</a><br><br><center><h1>PizzaOn</h1></center><br><br><div style=margin-left:300px><img src=image/2.jpeg width=500px height=300px></div></div>"
  );


  $templateCache.put('login/login.html',
    "<div class=col-md-12 ng-controller=LoginCtrl><div class=col-md-12 ng-controller=SignupCtrl><a href=\"\">Menu</a>&nbsp;&nbsp;&nbsp; <a href=#/signUp>Register</a>&nbsp;&nbsp;&nbsp; <a href=#/login>Login</a><br><br><center><h1>PizzaOn</h1></center><br><br><center><div style=\"position: relative;\n" +
    "  margin-top:-20px;\n" +
    "  margin-left:90px;\n" +
    "  padding: 20px 20px 20px;\n" +
    "  width: 350px;\n" +
    "  background: #ADEBFF;\n" +
    "  border-radius: 3px;\n" +
    "  -webkit-box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3);\n" +
    "  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)\"><h3>Login</h3><br><form name=loginform ng-submit=verify(email,password)><input type=email placeholder=Email ng-model=email name=email required><br><br><input type=password placeholder=Password name=password ng-model=password ng-minlength=6 ng-maxlength=20 required><br><br><p align=center><input type=submit value=Login name=\"slogin\"></p></form></div></center></div></div>"
  );


  $templateCache.put('signUp/signUp.html',
    "<div class=col-md-12 ng-controller=SignupCtrl><a href=\"\">Menu</a>&nbsp;&nbsp;&nbsp; <a href=#/signUp>Register</a>&nbsp;&nbsp;&nbsp; <a href=#/login>Login</a><br><br><center><h1>PizzaOn</h1></center><br><br><center><div style=\"position: relative;\n" +
    "  margin-top:-20px;\n" +
    "  margin-left:90px;\n" +
    "  padding: 20px 20px 20px;\n" +
    "  width: 350px;\n" +
    "  background: #ADEBFF;\n" +
    "  border-radius: 3px;\n" +
    "  -webkit-box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3);\n" +
    "  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)\"><h3>SignUp</h3><br><form name=signupform ng-submit=submit(user)><input type=text placeholder=\"First Name\" ng-model=user.fname name=fname required><br><br><input type=text placeholder=\"Last Name\" ng-model=user.lname name=lname required><br><br><input type=email placeholder=Email ng-model=user.email name=email required><br><br><input type=password placeholder=Password name=password ng-model=user.password ng-minlength=6 ng-maxlength=20 required><p ng-show=\"form.$submitted || form.password.$touched || form.user.$invalid\"></p><br><br><input type=password placeholder=\"Confirm Password\" name=cpassword ng-model=u.cpassword ng-minlength=6 ng-maxlength=20 required><br><br><input type=number placeholder=\"Mobile Number\" name=mobile ng-model=user.mobile ng-maxlength=10 required><br><br><input type=textarea rows=4 columns=4 placeholder=Address name=address ng-model=user.address required><br><br><p align=center><input type=submit value=SignUp name=\"signup\"></p></form></div></center></div>"
  );

}]);
