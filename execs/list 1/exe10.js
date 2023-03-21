/*10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus
Fahrenheit.*/

const prompt = require('prompt-sync')();

var celsius = parseInt(prompt('Quantos graus celsius você quer converter para fahrenheit: '));

var fahrenheit = (celsius * 9 / 5) + 32;

console.log('Os '+celsius+'° celsius convertidos dão '+fahrenheit+'° fahrenheit');