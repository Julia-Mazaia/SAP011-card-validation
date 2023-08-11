const validator = {
  isValid: function (cardNumber) {
    // Algorítmo de Luhn para validade do cartão
    const cleanedCardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d+$/.test(cleanedCardNumber)) {
      return false;
    }

    let sum = 0;
    let double = false;

    for (let i = cleanedCardNumber.length -1; i >= 0; i--) {
      let digit = parseInt(cleanedCardNumber[i], 10);

      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      double = !double;
    }

    return sum % 10 === 0;
  },
  maskify: maskCardNumber 
};

export default validator;
function maskCardNumber(cardNumber) {
  // Mostra apenas os últimos 4 
  const cleanedCardNumber = cardNumber.replace(/\s/g, '');
  if (cleanedCardNumber.length > 4) {
    const visibleDigits = 4;
    const maskedDigits = cleanedCardNumber.length - visibleDigits;
    const maskedPart = '#'.repeat(maskedDigits);
    const visiblePart = cleanedCardNumber.slice(-visibleDigits);
    return maskedPart + visiblePart;
  }
  else { return cleanedCardNumber }
}