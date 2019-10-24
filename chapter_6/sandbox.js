// const para = document.querySelector('div.error') // to get a single element
// console.log(para)

// const paras = document.querySelectorAll('p') .. to get all

// paras.forEach(para=>{
//     console.log(para)
// })
// console.log(paras[1])


//get an element by an Id

//get element by class

// get element by tag

// const para = document.querySelector('p')
// console.log(para.innerText)

// para.innerText = 'Ayo is a fine boy'
// console.log(para.innerText)


// const paras = document.querySelectorAll('p')

// paras.forEach(para=>{
//     console.log(para.innerText)
//     para.innerText+= ' new text'
// })

const content = document.querySelector('.content');
// console.log(content.innerHTML)

// content.innerHTML += '<h2>New H2 fisherman</h2>'

// const people = ['mario','liugi','yoshi']

// people.forEach(person=>{
//     content.innerHTML += `<li>${person}</li>`
// })


// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

// link.setAttribute('href','wwww.AyoTunde.com')
// console.log(link.getAttribute('href'))
// link.innerText = 'Please Click Me'

// const msg = document.querySelector('p')
// console.log(msg.getAttribute('class'))

const title = document.querySelector('h1')
console.log(title.style.color)

title.style.margin = '50px'
title.style.color ='crimson'

title.style.fontSize = '60px'
title.style.margin =''