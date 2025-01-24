const myArr=[0,1,2,3,4,5]
console.log(myArr)

const newArr=new Array(0,1,2,3,4)
console.log(newArr)

myArr.push(8)
console.log(myArr)
myArr.pop()
console.log(myArr)

console.log(myArr.includes(7))
console.log(myArr.indexOf(2))

const newAr=myArr.join()
console.log(myArr)
console.log(newAr)
console.log(typeof newAr)

myArr.shift()
console.log(myArr)
myArr.unshift(9)
console.log(myArr)

console.log(myArr.slice(1,3))
console.log(myArr)

console.log(myArr.splice(1,3))
console.log(myArr) 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);