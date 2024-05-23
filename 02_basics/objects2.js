const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false
//console.log(tinderUser);

const regularUser = {
    email:"sammy@google.com",
    fullname:{
        userfullname:{
            fullName:"syed",
            lastName:"suhail"
        }
        
        }
    }

//console.log(regularUser.fullname.userfullname.firstName);



const obj1 = {1:"a",4:"c"}
const obj2 = {3:"s",8:"h"}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"sammy@google.com"
    },
    {
        id:2,
        email:"fifia@gmail.com"
    }

]
//console.log(users[1].email);


//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));


