
let time = 1000 ; // in millisecon 

let count = 10 ;

let id = setInterval(fn , time );

function fn (){
    console.log(count  + " Seconds left in New Year");
    count --;

    if(count==0){
        clearInterval(id);
        console.log("Happy new Year");
    }
}