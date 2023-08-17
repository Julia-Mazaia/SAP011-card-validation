import validator from './validator.js';
let realCardNumber =''

const cardNumberInput = document.getElementById('cardNumber');
document.addEventListener('DOMContentLoaded', () => {
  const validateButton = document.getElementById('validateButton');

  validateButton.addEventListener('click', () => {

    if (validator.isValid(realCardNumber)) {
      alert('Cartão válido!');
    } else {
      alert('Número de cartão inválido. Certifique-se de inserir um número válido.');
    }
    realCardNumber = ''
  });
});
//Input para exibir apenas ultimos 4 números
cardNumberInput.addEventListener('input', (event) => {
  realCardNumber += event.target.value.slice (-1)
  const maskedCardNumber = validator.maskify (cardNumberInput.value);
  cardNumberInput.value = maskedCardNumber;
});


