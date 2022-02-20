const readline = require('readline-sync');

const askNumber = () => {
  return readline.questionInt('Escolha um número para receber a sequência fibonacci do tamanho selecionado (número inteiro maior que 0): \n');
};
const number = askNumber();

function fibonacci(num){
  let result = [1];

  for ( let i = 1;  i < num; i++) {
    if (i === 1) {
      result = [...result, 1]
    } else {
      result[i] = result[i - 2] + result[i - 1]
    }
  }

  return console.log(`A sequência Fibonacci de ${num} números é ${result.join(', ')}`)
}

if (number <= 0) {
  console.log('Digite um número maior que zero')
  require('./index')
  return
} else {
  fibonacci(number) 
}
