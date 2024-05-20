const marvel_heroes = ["ironman","superman","thor"]
const dc = ["flash","batman","spiderman"]
//marvel_heroes.push(dc)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3]);
const allheroes = marvel_heroes.concat(dc)
//console.log(allheroes);
const allnewheroes = [...marvel_heroes,...dc]
//console.log(allnewheroes);




const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = another_array.flat(Infinity)
//console.log(realanotherarray);

//console.log(Array.isArray("suhail")
//console.log(Array.from("suhail"));

console.log(Array.from({name :"suhail"}));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));