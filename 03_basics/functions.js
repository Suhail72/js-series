function sayMyname(){
    /*console.log("s");
    console.log("u");
    console.log("h");
    console.log("a");*/
}
sayMyname()

function addTwoNumbers(num1,num2) {
    //console.log(num1 + num2);
    
}
addTwoNumbers(3,4)


function addtwonumbers(number1,number2) {
    let result = number1 + number2
    return result
    
}
const result = addtwonumbers(5,6)
//console.log("Result:",result);

function loginUserName(userName) {
    if (!userName) {
        //console.log("please eneter a userName")
        return
    }
    return `${userName} just logged in`
    
}
//console.log(loginUserName());

function calculateCartPrice(val1,val2,...numm1) {
    return numm1
    
}
//console.log(calculateCartPrice(100,200,300,400));

const user = {
    username:"suhail",
    price:199
}
function handleObject(anyObject) {
    //console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray) {
    return getArray[3]
    
}
//console.log(returnSecondValue(myNewArray));