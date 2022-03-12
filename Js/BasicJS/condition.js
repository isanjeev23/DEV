const process = require('process');// aquire process module to get ip from node.js

let args = process.argv ;// args is an array  ans process.argv is an property 
 // which read ip from cmd line and stored n args  arr


let n = parseInt(args[2] , 10 );

if(n%2 == 0 ){
    console.log(`${n} is an even number`);
}else{
    console.log(`${n} is an odd number`);
}
