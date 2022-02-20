const readline = require('readline-sync');

const askNumber = () => {
  return readline.questionInt('Escolha um número para receber o fatorial do mesmo: \n');
};
const number = askNumber();

function fatorial(num){
  let result = 1;
  let count = 1;

  while(count <= num) {
   result *= count;
   count++;
  }

  return console.log(`O fatorial do número ${num} é ${result}`)
}

fatorial(number)