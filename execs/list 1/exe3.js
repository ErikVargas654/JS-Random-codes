//3. Faça um Programa que peça dois números e imprima a soma.

const prompt = require('prompt-sync')();

var number1 = parseInt(prompt('Digite o primeiro número: '));
var number2 = parseInt(prompt('Digite o segundo número: '));

var soma = number1 + number2

console.log(''+number1+' + '+number2+' = '+soma);