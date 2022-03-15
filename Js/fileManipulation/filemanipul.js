// enter source file name and dest file name in key value pair 
// ... node filemanipul.js --source="f1.txt" --dest="f2.txt"
const minimist = require('minimist');

const fs = require('fs');

let  args = minimist(process.argv);

// read from source file source : f1.txt 
let stext = fs.readFileSync(args.source , 'utf-8');

// capatilise all text
let dtext = stext.toUpperCase();

// write the captalised dtext string in new file f2.txt
fs.writeFileSync(args.dest , dtext, 'utf-8');




