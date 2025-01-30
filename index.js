function isValidVisaCard(cardNumber) {
          // Regular expression to match Visa card format (starts with 4 and is 16 digits long)
          const visaRegex = /^4[0-9]{15}$/;

          if (!visaRegex.test(cardNumber)) {
                    return false;
          }

          //Applying Luhn algorithm to validate the card number; check ReadMe for more info on Luhn algorithm.
          let sum = 0;
          for (let i = 0; i < cardNumber.length; i++) {
                    let digit = parseInt(cardNumber[cardNumber.length - 1 - i], 10);

                    if (i % 2 === 1) {
                              digit *= 2;
                              if (digit > 9) {
                                        digit = digit - 9;
                              }
                    }

                    sum += digit;
          }

          // If the sum is divisible by 10, the card is valid
          return sum % 10 === 0;
}

function Validator(cardNumber) {
          if (isValidVisaCard(cardNumber)) {
                    console.log("Valid Visa card number.");
          } else {
                    console.log("Invalid Visa card number.");
          }
}

const cardNumber1 = "4539148803436467"; 
const cardNumber2 = "4539148803436867"

Validator(cardNumber1);
Validator(cardNumber2);
