import validator from './validator.js';

console.log(validator);
const cardNumberInput = document.getElementById('cardNumber');
document.addEventListener('DOMContentLoaded', () => {
  const validateButton = document.getElementById('validateButton');

  validateButton.addEventListener('click', () => {
    const cardNumber = cardNumberInput.value;

    if (validator.isValid(cardNumber)) {
      alert('Cartão válido!');
    } else {
      alert('Número de cartão inválido. Certifique-se de inserir um número válido.');
    }
  });
});
//Input para exibir apenas ultimos 4 números
cardNumberInput.addEventListener('input', () => {
  console.log('teste')
  const maskedCardNumber = validator.maskify (cardNumberInput.value);
  cardNumberInput.value = maskedCardNumber;
});

