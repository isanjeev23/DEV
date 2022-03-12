// to run node withcb.js --source='f1.txt' --n= 50000


const minimist = require('minimist');

const fs = require('fs');


let args = minimist(process.argv);

function checkPrime( n ){
    let flag  = true ; 

    let div = 2 ;
    while(div*div<=n){
        if(n%div == 0){
            flag = false ;
            return flag ;
        }
        div++;
    }
    return flag ;
}

let t1 = Date.now();

// tast 1 read from file i.e disk related or is task k result p koi or dependen nhi h
fs.readFile(args.source , function(data){
    let t2 = Date.now(); 

    console.log(t2-t1); // finishing tast 1 in milisec
    // this is also total time taken to complete task 1 and tast 2 
    // because tast 2 tast start parallarly
})






let arr  = [];

for(let i=2 ; i<=args.n ; i++){
    let isPrime = checkPrime(i);

    if(isPrime==true){
        arr.push(i);
    }
}


