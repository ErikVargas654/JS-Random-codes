//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const prompt = require('prompt-sync')();

var bim1 = parseInt(prompt('Digite sua primeira nota: '));
var bim2 = parseInt(prompt('Digite sua segunda nota: '));
var bim3 = parseInt(prompt('Digite sua terceira nota: '));
var bim4 = parseInt(prompt('Digite sua quarta nota: '));

var media = ((bim1+bim2)+(bim3+bim4)) / 4;

console.log('Sua média foi de: '+media);