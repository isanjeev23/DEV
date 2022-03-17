// node processhtml.js --source="download.html"

const minimist = require('minimist');
const fs = require('fs');
const jsdom = require('jsdom');
// jsdom load html and prepare a dom tree 

let args  = minimist(process.argv);


fs.readFile(args.source , 'utf-8' , (err , html )=>{
    if(err) throw err ;
    
    // let JSDOM =  jsdom.JSDOM; // extractin JSDOM constructor i.e responsible for making dom tree

    let dom = new jsdom.JSDOM(html) ; //dom  a new obj that we created JSDOM(will parse the html) prepare dom tree and assing it to 
    // .. dom obj 
    
    let document = dom.window.document ;// dom obj m window or document child h 
    // par hamre kam ka to document h to tu use extract kar k document assing kar diya

    let descrip = document.querySelectorAll("div.match-info > div.description");
    // we wil get all class 
    for(let i=0 ; i<descrip.length ; i++){
        console.log(descrip[i].textContent);
    }
})

