// EXERCÍCIO 1  
// Faça as 4 operações básica com base nos números 2 e 4:
// Ao final de cada operação imprima na tela no seguinte formato: 
// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x
// Fonte: https://www.youtube.com/watch?v=19-Rpiny8eU&list=PLylCwvNCtoakuEW0VGSD8XB56jBHbQxF8&index=3&ab_channel=tecnologiaemvideo
// ---------------------------------------------------------------
const  values = {
  oneValue: 2,
  twoValue: 4,
};

const { oneValue, twoValue} = values;

console.log(`Soma: 2 + 4 = ${oneValue + twoValue}`);
console.log(`Subtração: 2 - 4 = ${oneValue - twoValue}`);
console.log(`Divisão: 2 / 4 = ${oneValue / twoValue}`);
console.log(`Multiplicação: 2 * 4 = ${oneValue * twoValue}`);
