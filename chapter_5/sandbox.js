//object literals


// const blogs = [

// ];


let user = {
    name:'crystal',
    age:30,
    email:'crystal@thenetninja.co.uk',
    location:'berlin',
    blogs:[{title:'Gods not dead',likes:90},
    {title:'Go away',likes:200}],
    login(){
    console.log('The user logged in');
    },
    logout(){
        console.log('Yhe user logged out')
    },
    logblocks(){
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes)
        });
    }
    //this keyword is a context object, it represents the context, the current code is executed
};

user.login();
user.logout()
user.logblocks()

// console.log(user);
// user.age = 120
// console.log(user.age)
// console.log(user['email'])


//Math object
console.log(Math.PI)
console.log(Math.E)

const area = 7.7

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.trunc(area))


//random numbers

const random = Math.random()
console.log(random)
// console.log(Math.round(random * 100))

// primitive types
// 1. numbers
// 2.strings
// 3.booleans
// 4.null
// 5.undefined
// 6.symbols

//primitive types

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreone:${scoreOne} , scoretwo:${scoreTwo}`)
scoreOne = 200
console.log(`scoreone:${scoreOne} , scoretwo:${scoreTwo}`)


//reference types

const user1 = {
    name: 'jackie',
    age:30
};
const user2 = user1;
console.log(user1,user2)

user1.age = 56;
console.log(user1,user2) 

