// npm install pdf-lib 
// node writingPdf.js --source=teams.json --dest=WorldCup2019

const minimist = require('minimist');
const fs = require('fs');
const path  = require('path');
const pdf= require('pdf-lib');

let args  = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source , 'utf-8');

let teams = JSON.parse(teamsJSON)

 fs.mkdirSync(args.dest) ; // making root folder 

for(let i = 0 ; i<teams.length ; i++){
    let  teamName = teams[i].name ;

    let teamFN = path.join(args.dest , teams[i].name);
    
    fs.mkdirSync(teamFN); // creating child folder of resp team 

    for(let j=0 ; j<teams[i].matches.length ; j++){
   

    let  matchFileName = path.join(teamFN , teams[i].matches[j].vs + '.pdf');
    
      createScoreCard(teamName  , teams[i].matches[j] , matchFileName)
      // we are sending obj no need extract info and then send teams[i].match is enough 
      // to extract the oppent and result
    }
}

  function createScoreCard( teamName  , matches , filepath){
    //   console.log(teamName); // all the commented  thing just to check 
    //   console.log(matches.vs);
    //   console.log(matches.result) ;
    //   console.log(filepath);
    //   console.log('-------------------------');


     let t1  = teamName ; 
     let t2 = matches.vs ;
     
     let result = t1 + " " + matches.result;

     let pdfDocument = pdf.PDFDocument;// library m se PDFDocument property nikali

     let templateBytes = fs.readFileSync('template.pdf');

     let promiseToLoadBytes = pdfDocument.load(templateBytes);
     
     // jab promise pura ho jaye tab bytes function ko de de
     
     promiseToLoadBytes.then(function(pdfdoc){
         let page = pdfdoc.getPage(0);
         
         page.drawText(t1 , {
             x : 320 ,
             y : 702 ,
             size: 14

         });

         page.drawText(t2 , {
            x : 320 ,
            y : 682,
            size: 14
            
        })

        page.drawText(result , {
            x : 320 ,
            y : 660 ,
            size: 14
            
        })

         let promiseToSave = pdfdoc.save();
         
         promiseToSave.then(function(newBytes){
             fs.writeFileSync(filepath , newBytes);
         });

     })

     

  }