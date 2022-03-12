const parser = require('minimist');
const fs = require('fs');

let args = parser(process.argv);

let sourcetext = fs.readFileSync(args.source ,'utf-8'); // readfile return string

// console.log(sourcetext);

 let word = sourcetext.split(" "); // split the text on bases of space and  return arr
 
 for(let i=0 ; i<word.length ; i++){
    word[i]= word[i].toUpperCase()
 }
// console.log(word);
  
 let dtext = word.join(" "); // join to arr on space and return string 
 console.log(dtext);

fs.writeFileSync(args.dest , dtext , 'utf-8'); // args.dest creat dest file and writeSync read form dtext and paste in dest file
 






