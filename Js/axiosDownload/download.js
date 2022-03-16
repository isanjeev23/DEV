let minimist = require("minimist");
let fs = require('fs');

// npm install axios 
// node download.js --dest="download.html" --link="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415"
let axios = require('axios');

let args = minimist(process.argv);

let dwnloadKaPromise = axios(args.link); // download ka promise kiya h download nhi kiya abhi

// agar download ho jaye to (then) downloadKaPromise.then data function ko data pass kar denga
// respoce m or bhi data pada h object form m hamari kaam ki file data respnce obj ki data key m 
// padi h

dwnloadKaPromise.then(function(responce){
    let html = responce.data ;
    fs.writeFileSync(args.dest , html , 'utf-8');

}).catch(function(err){
    // cath is  funciton if error occures in donwload err passed to catch 
    console.log(err);
});
