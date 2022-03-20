// node readJson.js --source=teams.json 

const  minimist  = require('minimist');
const fs = require('fs');

let args = minimist(process.argv);

let data = fs.readFileSync(args.source , 'utf-8');
console.log(data);