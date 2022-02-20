const { askName, askHeight, askWeight } = require('./input');

const imc = (height, weight) => {
    return (weight / Math.pow(height, 2));
};

function answer() {
    const name = askName();
    const height = askHeight();
    const weight = askWeight();
    const imcFinal = imc(height, weight).toFixed(2);
    let imcResult = ''
  
    if(imcFinal < 18.5){
      imcResult = 'Abaixo do peso (magreza)';
    } else if (imcFinal >= 18.5 && imcFinal < 25) {
      imcResult = 'Peso normal';
    } else if (imcFinal >= 25 && imcFinal < 30) {
      imcResult = 'Acima do peso (sobrepeso)';
    } else if (imcFinal >= 30 && imcFinal < 35) {
      imcResult = 'Obesidade grau I';
    } else if (imcFinal >= 35 && imcFinal < 40) {
      imcResult = 'Obesidade grau II';
    } else if (imcFinal >= 40) {
      imcResult = 'Obesidade grau III e IV';
    } else {
      imcResult = 'Desculpe, cálculo incorreto';
    }
  
    console.log(`O IMC de ${name} é de ${imcFinal}. Sua situação é: ${imcResult}`)
  }
  
  answer();