//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
const heros=["ironman","captain america","thor"]
let myObj={
    name:"sandesh",
    age:22
}
const myFunction=function(){
   console.log("hellooo");
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)
myFunction()
console.log(typeof bigNumber)
console.log(typeof anotherId)




//************************** MEMORY***************
// Stack(Primitive)->copy  ,  Heap(Non-Primitive)->actual value

let myYoutubeChannel="sandeshrajput"
let anotherName=myYoutubeChannel
anotherName="chaiaurcode"

console.log(myYoutubeChannel)
console.log(anotherName)



let userOne = {
   email:"ssr@gmail.com",
   age:22
}

let userTwo = userOne
userTwo.email="sandesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)