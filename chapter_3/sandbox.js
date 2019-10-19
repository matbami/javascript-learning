for(let i = 0; i <5; i++){
    console.log('in loop:', i)
}
console.log("loop done");

const names = ['adr','fade','dase']

let i = 0;
while(i<names.length){
    console.log(names[i])
    i++
}

// const fish = "titanic"
// console.log(fish.length)


//logical not

let user = false
if(!user){
console.log("dontg be a naughty bpy")
}
console.log(!true)
console.log(!false)

//break and continue
const scores = [10,50,20,30,40]
for(let i = 0; i <scores.length;i++){

    if(scores[i] ===20){
        continue; //continue jumps out of the current loop
    }
    console.log('your score:', scores[i])

    if(scores[i] === 50){
        console.log(' you have the maximum score')
        
    }
}