/*9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a
temperatura em graus Celsius.
C = 5 * ((F-32) / 9).*/

const prompt = require('prompt-sync')();

var fahrenheit = parseInt(prompt('Quantos graus fahrenheit você quer converter para celsius: '));

var celsius = 5 * ((fahrenheit - 32) / 9);

console.log('Os '+fahrenheit+'° fahrenheit convertidos dão '+celsius+'° celsius');
