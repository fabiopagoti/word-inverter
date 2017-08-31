"use strict"

const inverted = require('./')
const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question('Digite um palavra para inverter: ', (answer) => {
  console.log(`Vc digitou: ${answer}`);

  let sInverted = inverted(answer)

  console.log(sInverted)

  if (sInverted) {
    rl.close();
  }

})
