"use strict"

// const inverter = function(){

// }

// exports = inverter


module.exports = function(word){
	if(!word){
		return word
	}

	let sInverted = ""
	let sCurrentChar = ""
	for(let i = word.length - 1; i >= 0; i--){
		sCurrentChar = word[i]	
		
		sInverted = sInverted + sCurrentChar

	}
	
	return sInverted
}