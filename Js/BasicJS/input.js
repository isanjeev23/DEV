let args = process.argv;
console.log(args);

// args is an array variable  in args array 0th element is node path , 1st is an 
//our input.js file 

// only idx ==2 and afterwards are usefull to us 

let i = args[2];

console.log(parseInt(i , 2))