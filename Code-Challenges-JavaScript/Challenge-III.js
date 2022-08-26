// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// Referrer: https://youtu.be/e4gTiBOPQ7Q
// =========================

// Inputs ++++++++++++++++++
let inputPrice = 65;
let inputDiscount = 10;
let inputInstallment = 3;

// +++++++++++++++++++++++++

let price = inputPrice; // Valor do produto.
let discount = inputDiscount;// Desconto no caso 10%
let cashPayment = 0; // Valor à vista.
let installmentValue = 0; // Parcelamento

const calculateInstallment = (price) => {
  const resultValue = price / inputInstallment;
  return installmentValue = resultValue;
};

const calculateDiscount = (price, discount) => {
  const resultValue = price - (price * (discount / 100));
  return cashPayment = resultValue;
};

const calculatePayment = (price, discount) => {
  const resultDiscount = calculateDiscount(price, discount);
  return resultDiscount;
};

const showPayment = () => {
  calculatePayment(price, discount);
  calculateInstallment(price, inputInstallment);

  console.log(`Preço: R$ ${price.toFixed(2)}`);
  console.log(`À vista: R$ ${cashPayment.toFixed(2)}`);
  console.log(`Ou 3x de: R$ ${installmentValue.toFixed(2)}`);
};

showPayment();