const readline = require('readline-sync');

const askTime = () => {
  return readline.questionInt('Qual o tempo (em segundos) que o carro utilizou para percorrer a distância?\n');
};

const askDistance = () => {
  return readline.questionInt('Qual a distância (em metros) percorrida pelo carro?\n');
};

const time = askTime();
const distance = askDistance();

function averageSpeed (t, d) {
  result = ( d / t )
  console.log(`A velocidade do carro era de ${result} metros por segundo`)
}

averageSpeed(time, distance);
