let args = process.argv;

let n= parseInt(args[2] , 10 );

let array = [];

for(let i=0 ; i<n ; i++){
    array.push( parseInt(args[3+i] ) );
}

array.forEach(elmnt =>{
    console.log(elmnt);
})

console.log(array);
console.log(array.length);

array.push(60); //  add elmnt to the last

console.log(array);

array.unshift(12); // add emnt at idx = 0 and shift all previous elemnt 
console.log(array);