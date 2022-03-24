// node folderCreation.js --source=team.json --dest=root


const minimist = require('minimist');

const fs = require('fs');

const path = require('path') ; // to make folder path and resolve 

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source , 'utf-8');

let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest) //  will make parent folder 

for(let i = 0 ; i<teams.length ; i++){

    fs.mkdirSync(path.join(args.dest , teams[i].name));
    // fs.mkdirSync will make folder synchrously and path  join will make path string
    // ex root is parent  folder iske andar child folder Australia , India , pak bana h
    // path for Austrail string will be root/Australia and so on .
}