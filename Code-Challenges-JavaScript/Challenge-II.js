// Exercise 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// Referrer: https://youtu.be/FNitnbgbxyM
// ---------------------------------------------------------------

// Input of client -----------------------------
let valueOfDinner = 80;
let waiterFeePercent = 10;
// END - Input of client -----------------------------
let waiterFee = 0;
let totalCost = 0;

const calculateFee = (cost, feePercent) => {
  const resultFee = cost*(feePercent/100);
  waiterFee = resultFee;
  console.log(waiterFee);
  return resultFee;
};

const calculateTotal = (cost, feePercent) => {
  const waiterFee = calculateFee(cost, feePercent)
  const resultTotal = cost + waiterFee;
  totalCost = resultTotal;
  return resultTotal;
};

const resultCost = () => {
  calculateTotal(valueOfDinner, waiterFeePercent);

  console.log('############ CUPOM FISCAL ############');
  
  console.log('--------------------------------------------');
  console.log(`Valor do jantar: R$ ${valueOfDinner.toFixed(2)}`);
  console.log(`Taxa do garçom: R$ ${waiterFee.toFixed(2)}`);
  console.log(`Total a pagar: R$ ${totalCost.toFixed(2)}`);
  console.log('--------------------------------------------');
};

 resultCost();
