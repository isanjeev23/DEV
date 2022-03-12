let args = process.argv ;

let n = parseInt(args[2] , 10 );

let isPrime= true ;

let div = 2 ;
while(div*div<=n){
    if(n% div ==0){
        isPrime = false;
        break ;
    }
    div++;
}
console.log(` ${n} is prime =  ${isPrime}`);