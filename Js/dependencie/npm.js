let parser = require('minimist');

// minimist is actually a parser library which convet input string into string 
// ans input int  into integer in key value pair

let args = parser(process.argv); // args is an obj 
// cmdline s input dene ka tarika -x(its a key) space k baad 4(value)
// or --name="sanjeev" or --age=19 

console.log(args.x + " " + args.age)

console.log(args.name);

console.log(args);