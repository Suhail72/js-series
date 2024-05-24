const user = {
    userName:"suhail",
    price:999,
    welcomeMessage:function(){
        //console.log(`${this.userName}, welcome to website`);
        //console.log(this);
    }
}
user.welcomeMessage()
user.userName= "sam"
user.welcomeMessage()
//console.log(this);


function chai(){
    //console.log(this);
}
chai()


const Chai= ()=> {
    let username= "haser"
   // console.log(username);
}
Chai()

const addtwo= (num1,num2)=> {
    return num1+num2
}
//console.log(addtwo(8,5));



/////iifi///
(function tea() {
    console.log("DB connects");
    
})()


//(()=> {
    //console.log("not connected");
//})()

//((name)=> {
    //console.log(`db connected to ${name}`);
//})("hiten")