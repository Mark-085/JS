const user = {
    username: "ssr",
    price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

 user.welcomeMessage()
 user.username = "san"
 user.welcomeMessage()
//console.log(this);


// function chai(){
//     let username = "ssr"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "ssr"
//     console.log(this);
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "ssr"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "ssr"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()