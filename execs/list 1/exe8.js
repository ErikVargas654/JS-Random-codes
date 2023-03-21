/*8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas
trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.*/

const prompt = require('prompt-sync')();

var ganhoPHr = parseInt(prompt('Quanto você ganha por hora: '));
var horas = parseInt(prompt('Quantas horas você trabalha por mês: '));

var salario = ganhoPHr * horas;

console.log('Seu salario este mês será de '+salario+' reais.');
