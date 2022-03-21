// node excel.js --source=teams.json  --dest=teams.csv
// nmp install minimist 
// nmp install excel4node

const minimist = require('minimist');

const fs = require('fs');

const excel = require('excel4node');


let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source , 'utf-8');

let teams = JSON.parse(teamsJSON);

let wb = new  excel.Workbook();


const bgStyle = wb.createStyle({
    font : {
        bold : true ,
        size : 11 ,

    } ,

    fill: {
      type: 'pattern',
      patternType: 'solid',
    
      fgColor: 'green',
    }
  });
  

for(let i=0 ; i<teams.length ; i++){
    let sheet = wb.addWorksheet(teams[i].name);

    sheet.cell(1,1).string("Opponent").style(bgStyle);
    sheet.cell(1,2).string("Result").style(bgStyle);

    sheet.cell(1 , 4).string("Rank").style(bgStyle);
    sheet.cell(1,5).number(teams[i].rank);

    for(let j= 0 ; j<teams[i].matches.length ; j++){
        sheet.cell( j+2, 1).string(teams[i].matches[j].vs);
        sheet.cell( j+2, 2 ).string(teams[i].matches[j].result);
    }
}

wb.write(args.dest);



