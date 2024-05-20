const mysym = Symbol("key1")
const jsUser = {
           name:"suhail",
           age:25,
           [mysym]:"myKey1",
           location:"halaguru",
           email:"suhail@google.com",
           isLoggedin:false,
           lastLoggedIn:"saturday"   
}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser[mysym]);

//changing values
jsUser.email = "suhail@microsoft.com"
//console.log(jsUser);
//Object.freeze(jsUser)
//jsUser.email = "suhail@twiiter.com"
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello jsuser");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello jsuser,${this.name}`);
}
console.log(jsUser.greeting2());



