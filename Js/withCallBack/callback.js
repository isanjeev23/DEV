const minimist = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);

fs.readFile(args.source , 'utf-8', function(err, data){
    if (err) throw err;

   fs.writeFile(args.dest , data , "utf-8" , (err)=>{
       if(err) throw err ;
       console.log(err) ;
       console.log("something got wrong while writing the file ");
   })
   
   });