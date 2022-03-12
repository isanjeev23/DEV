const process = require('process');

let ip = process.argv ;

let n  = parseInt(ip[2] , 10 );

for(let i=2 ; i<=n ; i++){
    let  flag = isPrime(i);
    
    console.log(`Is ${i} is prime = ${flag} `);

}

function isPrime(n){
    let flag = true ;

    let div = 2 ;
    while(div*div<=n){
        if(n%div==0){

            flag=false;
            return flag ;
        }
        div++;
    }
     return flag ;
}