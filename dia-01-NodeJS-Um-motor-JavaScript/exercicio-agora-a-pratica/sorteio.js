const readline = require('readline-sync');

function result(randomN, userN) {
  if (randomN === userN) {
    return console.log('Parabéns, número correto!')
  } else {
    return console.log(`Opa, não foi dessa vez. O número era ${randomN}`)
  }
}

function guessingGame () {
  const randomNumberCalc = () => {
    min = Math.ceil(0);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = randomNumberCalc();

  const askNumber = () => {
    return readline.questionInt('Escolha um número entre 0 e 10.\n');
  };
  const userNumber = askNumber();

  result(randomNumber, askNumber);

  const askPlayAgain = () => {
    return readline.question('Deseja jogar novamente? (Digite s para sim e n para não.)\n');
  };

  const playAgain = askPlayAgain();

  if (playAgain !== 's') return console.log('Obrigado! Jogo terminado') 

  guessingGame();
}

guessingGame();