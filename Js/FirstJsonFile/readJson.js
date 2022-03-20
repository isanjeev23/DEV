// node readJson.js --source=teams.json 

const  minimist  = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);

fs.readFile(args.source , 'utf-8' , (err , json )=>{
    if(err){
        console.log(err);
    }else{
        let teams = JSON.parse(json); // we need to parse the string throw json which
        // provide array of Object not string 

        console.log(teams[0].matches[0].result); // since teams is array of object we can access ..
        // element of array with [] operator and property of element by . (opertor).
    }
})