const readline = require('readline-sync');

const askName = () => {
    return readline.question('Qual o seu nome?\n');
};

const askHeight = () => {
    return readline.questionFloat('Qual a sua altura?\n');
};

const askWeight = () => {
    return readline.questionFloat('Qual p seu peso?\n');
};

module.exports = {
    askName,
    askHeight,
    askWeight,
};
