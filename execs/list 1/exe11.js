/*11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.
*/

const prompt = require('prompt-sync')();

var int1 = parseInt(prompt('Digite um número inteiro: '));
var int2 = parseInt(prompt('Digite outro número inteiro: '));
var real = parseInt(prompt('Digite um número real: '));

var prodDobro = (2 * int1) + (int2 / 2);
var triplo = (3 * int1) + real;
var cubo = real * real * real;

console.log(prodDobro);
console.log(triplo);
console.log(cubo);