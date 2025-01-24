const name="sandesh"
const age=22
console.log(`hello i am ${name} my age is ${age}`)

const gameName=new String('sandesh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n')); 


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   san    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ssr.com/ssr%20rajput"

console.log(url.replace('%20', '-'))

console.log(url.includes('sanjay'))

const gamerS=new String('ssr-22-batman')
console.log(gamerS.split('-'));


