const fs = require("fs");
const Automaton = require("./automaton");
const AutomatonConstructor = require("./automatonConstructor");

let [,,str_file, substr_file] = [...process.argv];
let string = fs.readFileSync(str_file, "utf-8");
let sub_string = fs.readFileSync(substr_file, "utf-8");

let automaton = AutomatonConstructor.constructAutomaton(sub_string);

let counter = 0;
let result = new Array();

let start_time = new Date().getTime();

for (let i = 0; i < string.length; i++){
	if (automaton.nextStep(string[i])){
		result[counter] = i + 1 - sub_string.length;
		counter++;
	}
}
let end_time = new Date().getTime();
let execute_time = end_time - start_time;
if (counter != 0){
	console.log(`All starts of entries of substr: `)
	for (let i = 0; i < counter; i++) console.log(`${i + 1} - ${result[i]} `)
}
else console.log(`There's no given substring in this string`);
console.log(`Execute Time: ${execute_time}`);
console.log(`Automaton:\n${automaton.makeTable()}`);
