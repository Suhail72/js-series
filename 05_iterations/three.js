//for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World !"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
}

//maps
const map = new Map()
map.set("IN","INDIA")
map.set("FR","france")
map.set("uk","united kingdom")
//console.log(map);

for (const key of map) {
    //console.log(map);
    
}
for (const [key,value] of map) {
   // console.log(key, ":-", value);
    
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'counter'
}
    for (const [key,value] of myObject) {
        console.log(key, ":-", value);
        
    }
