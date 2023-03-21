/*12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule
seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
*/

const prompt = require('prompt-sync')();

var altura = parseInt(prompt('Digite sua altura: '));

var peso = (72.7 * altura) - 58;

console.log('Seu peso ideal é '+peso+'Kg');
