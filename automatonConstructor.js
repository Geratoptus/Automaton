const Automaton = require("./automaton");

class AutomatonConstructor {
	
	static makeAlphabet(string){
		let alphabet = new Array();
		for (let i = 0; i < string.length; i++){
			alphabet[string[i]] = 0;
		}
		return alphabet;
	}
	
	static constructAutomaton(substr){
		let automaton = new Array(substr.length + 1);
		let alphabet = AutomatonConstructor.makeAlphabet(substr);
		
		for (let i = 0; i <= substr.length; i++)
			automaton[i] = new Array();
		
		for (let letter in alphabet)
			automaton[0][letter] = 0;
		
		for (let i = 0; i < substr.length; i++){
			let previous_step = automaton[i][substr[i]];
			automaton[i][substr[i]] = i + 1;
			for (let 	letter in alphabet)
				automaton[i + 1][letter] = automaton[previous_step][letter];
		}
		return new Automaton(automaton, substr);
		
	}
	
}

module.exports = AutomatonConstructor;
