function sum(num1, num2){
    return num1 + num2
}

function calc(num1,num2, callback){
    return callback(num1,num2)
}

console.log(calc(2,2,sum))

setTimeout(() => {
    console.log('hola mundo')
},8000)

const grettings = (name) => {
    console.log(`Hola ${name}`)
}

setTimeout(grettings, 12000, 'Vericar')

console.log(`taco 1`);
setTimeout(()=>{
    console.log(`Pizza`);
},0)
console.log(`taco 2`);
console.log(`taco 3`);