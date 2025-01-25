// Immediately Invoked Function Expressions (IIFE)

    
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})(); // imp to run code


((name)=>{
    console.log(`DB CONNECTED ${name}`)
})("ssr")