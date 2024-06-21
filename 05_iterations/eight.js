//Reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce(function (ak,curval) {
    //console.log(`ak : ${ak} and curval : ${curval}`);
    return ak+curval
    
},0)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName : "javascript",
        itemPrice : 2999
    },

    {
        itemName : "python",
        itemPrice : 3999
    },

    {
        itemName : "java",
        itemPrice : 5999
    },

    {
        itemName : "dataScience",
        itemPrice : 12999
    }
]
const amntToPay = shoppingCart.
  reduce((acc,item) => acc+item.itemPrice,0)
console.log(amntToPay);