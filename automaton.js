class Automaton {
	
	constructor(automaton, substr){
		this.buffer = "";
		this.substr = substr;
		this.automaton = automaton;
	}
	
	nextStep(letter){
		let return_val = +(this.buffer + letter == this.substr);
		
		let step = this.buffer.length;
		let letter_to_go = this.automaton[step][letter] || 0;
		
		this.buffer = this.substr.substring(0, letter_to_go);
			
		return return_val;
	}
	
	makeTable(){
		let automaton_table = "";
		for (let i = 0; i < this.automaton.length; i++){
			automaton_table += `${i} | `;
			for (let letter in this.automaton[i]){
				automaton_table += `${letter}: ${this.automaton[i][letter]} | `;
			}
			automaton_table += "\n";
		}
		return automaton_table;
	}
}

module.exports = Automaton;