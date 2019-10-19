//function declaration
// function greet(){
//     console.log('Hello there my name is Ayo')
// }

// greet()

//function expression
// const speak = function(name = 'david',time = 'afternoon'){
//     console.log(`i am here to stay ${name} ${time}`)
// }

// speak('agba','morning')

// const calcArea = function(radius){
//     return  3.142 * radius**2
   
// }




//arrow functions
const calcArea = (radius) =>{
    return  3.142 * radius**2
}
const area = calcArea(5)
console.log('area is:', area)

// const area = calcArea(6.5)

// console.log(area)

// const calcvol = function(area){
// return area*5
// }
// const value = calcvol(area)
// console.log(value)

//practice arrow functions

// const greet = ()=>{
//     return 'hello world'
// }
// const value = greet();
// console.log(value)

const bill = (products,tax)=>{
let total = 0;
for(let i = 0; i< products.length; i++){
    total+= products[i] + products[i] * tax;
}
return total;
}

const data = bill([10,20,50],0.5)
console.log(data)


//difference between function and method

//function
const name = 'tunde';
const greet = () => 'Hello'

let resultone = greet()
console.log(resultone);

//method

let resultTwo = name.toUpperCase()
console.log(resultTwo)

//callbacks & for each

//when you pass a function into an argument, it is called a callback
const myFunc = (callback) =>{
let value = 50;
callback(value)
}

myFunc(value=>{
console.log(value)
})


let people = ['gad', 'seth','japheth','reuben']

const person = (person,index) =>{
console.log(`${index} - hello ${person}`)
}

people.forEach((person, index) =>{
    console.log(index,person)
})


const ul = document.querySelector('.people')

const eyan = ['ade', 'tobi', 'segun','bola']

let html = ``;

eyan.forEach(person=>{
    html+=`<li style="color:purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html;
