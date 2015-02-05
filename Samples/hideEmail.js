function protectEmail(email){
	var splittedEmail=email.split("@");
	var string=splittedEmail[0].substring(0,3);
	var hidedEmail=string+"..."+"@"+splittedEmail[1];
	console.log(hidedEmail);
}
protectEmail("albyjoseph@gmail.com");