//5. Faça um Programa que converta metros para centímetros.


const prompt = require('prompt-sync')();

var metros = parseInt(prompt('Quantos metros vc quer converter?'));

var convert = metros * 100;

console.log('os '+metros+' metros convertidos dão '+convert+'cm');