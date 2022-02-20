const readline = require('readline-sync');

const scriptsList = ['1 - Cálculo de IMC', '2 - Cálculo de velocidade', '3 - Jogo de adivinhação', '4 - Cálculo fatorial'];

const askScript = () => {
  return readline.questionInt('Escolha um programa para começar (digite somente o número): \n' + scriptsList.join('\n') + '\n');
};
const answer = askScript();

function main() {
  switch(answer) {
    case 1 :
      require('./imc')
      break
    case 2 :
      require('./velocidade')
      break
    case 3 : 
      require('./sorteio')
      break
    case 4 : 
      require('./fatorial')
      break
    default : 
      console.log('você digitou número inválido, tente novamente!')
  }
}

main();
