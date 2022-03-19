// node firstJson.js --dest=teams.json

const minimist = require('minimist');
const fs = require('fs');
const { stringify } = require('querystring');

let args = minimist(process.argv);

let teams = [
     {
         name : "India",
         rank : 1 , 
         matches : [
             {
                 vs : "Austrailia",
                 result: "won"
             },
             {
                 vs : "Pakistan",
                 result : "won"
             }
         ]
         
     },

     {
         name: "Austrailia",
         rank: 2 ,
         matches : [
             {
                 vs:"India",
                 result:"lost"
             },

             {
                 vs: "Pakistan",
                 result:"won"
             }
         ]
     },

     {
         name : "Pakistan",
         rank : 3 ,
         matches : [
             {
                 vs : "India",
                 result : "lost"
             },

             {
                 vs : "Austrailia",
                 result : "lost"
             }
         ]
     }
];

let json = JSON.stringify(teams) ; // to convert array of obj into json to write in file
 

fs.writeFile(args.dest , json , 'utf-8' , (err , data ) => {
    if(err) throw err ; 

    console.log("Json created succesfully !");
})



