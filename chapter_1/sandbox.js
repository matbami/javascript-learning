
// let age = 25;
// let year = 2019;


// console.log(age,year);
// age = 30;
// console.log(age)

// const points = 2011;
// console.log(points)


//strings
console.log('hello,world')
let email = "adelekeayobami13@gmail.com"
console.log(email)

//string concatenation
let firstname = "haywhy"
let lastname = "leke"

let fullname = firstname + " " + lastname
console.log(fullname)

//getting characters
console.log(fullname[0])

//string length
console.log(fullname.length)

//string method
console.log(fullname.toUpperCase())
let result = fullname.toLowerCase()
console.log(result)
let index = email.indexOf("@")
console.log(index)

//common string methods
//let result2 = email.lastIndexOf('o')

let result2 = email.slice(2,5)
let result3 = email.substr(2,10)
let result4 = email.replace('m','t')

console.log(result2)
console.log(result3)
console.log(result4)

//Numbers

//Nan -not a number
// template strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = '30'

let result5 = `the blog called ${title} by ${author} has ${30} likes`
console.log(result5)

//creating html templates
let html =`
<h2>${title}</h2>
<p>${author}</p>
<span> This blog has ${likes} likes</span>`

let ninjas = ['ayo','tobi','tunde'];
// console.log(ninjas)
// console.log(ninjas[0])

let ages = [12,62,22];

//array methods
let ansa = ninjas.join('@')
console.log(ansa)