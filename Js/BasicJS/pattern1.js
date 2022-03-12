let args = process.argv ;

let n = parseInt(args[2] , 10 );

for(let i=1 ; i<=n ; i++){
    let str = '';
    for(let j=1 ; j<=i ; j++){
        str= `*\t${str}` ; // interpolating  same as "*\t" + str 
    }
    console.log(str);
}