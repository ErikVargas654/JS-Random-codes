/*7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta
área para o usuário.*/

const prompt = require('prompt-sync')();

var altura = parseInt(prompt('Digite a altura do quadrado: '));
var base = parseInt(prompt('Digite a base do quadrado: '));

var area = (base * altura) * 2;

console.log('A área dobrada é: '+area);

