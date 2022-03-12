// node filename.js --source='f1.txt' --n=50000 or any thing you want 
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

// console.log('time at starting of task 1 t1 is ' + t1 % 1000);
//Asynhronus top to bottom execution 

let stext = fs.readFileSync(args.source); // tast 1 next will run when this is completed its excution

let t2 = Date.now(); // gives us the time from jan1 till now in minisec 

// console.log(t2 % 1000);
console.log(t2-t1); // time to complete read/write i.e disk related work

let t3 = Date.now();
// console.log(t3 % 1000 );

let arr  = [];

for(let i=2 ; i<=args.n ; i++){
    let isPrime = checkPrime(i);

    if(isPrime==true){
        arr.push(i);
    }
}

let t4= Date.now();

// console.log(t4 % 1000);
console.log(t4-t3);// time to complete cpu tast 

console.log(t4-t1); // total time taken 