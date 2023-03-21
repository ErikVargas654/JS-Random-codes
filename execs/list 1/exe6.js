//6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. pi = 3.14

const prompt = require('prompt-sync')();

var circulo = parseInt(prompt('Qual o raio do círculo: '));

var area = (circulo * circulo) * 3.14;

console.log('A área do círculo é: '+area)