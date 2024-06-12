const email = []
if (email) {
    //console.log("got email");
    
}
else{
    //console.log("dont have email");
}


const Arr = []
if (Arr.length === 0) {
    //console.log("array is empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    //console.log("object is empty");
    
}


//nullish coalescing operator (??):null undefined

let val1;
//val1 = 10 ?? 5
//val1 = null ?? 10
//val1 = undefined ?? 15
//console.log(val1);


//ternary operator
//condition ? true :false

const teaPrice = 70
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");