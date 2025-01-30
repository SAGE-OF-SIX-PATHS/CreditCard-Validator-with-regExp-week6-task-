#         <h2 align="center">A VISA Credit Card Validator </h2>
##        <h3 align="center">A Credit Card Validator built on JavaScript using Regular Expression </h3>       

###       SCOPE: 
####      This project is limited to only the VISA Credit Card validation.

###       REQUIREMENT GATHERING: 
####      In the scope of this research, the Credit card validator will make use of:
#####     1. if statements as control flow
#####     2. Regular Expressions as testers and validators
#####     3. Luhn Algorithm for specific defintions using the Regular Expressions

###       What is Luhn Algorithm?
#####     The Luhn Algorithm is a checksum formula used to validate various types of identification numbers, such as credit card numbers, social security numbers, and IMSI numbers.

###       Steps to Validate a Number Using the Luhn Algorithm:
#####     1. Start from the rightmost digit, double every second digit (starting from the second-to-last digit).

#####     2. If doubling results in a number greater than 9, sum the digits of that number or subtract 9 from the new number gotten from the summation.
#####     For example:
#####     Doubling 6 gives 12, so sum 1 + 2 = 3.
#####     Doubling 7 gives 14, so sum 1 + 4 = 5.
#####     Sum all the digits.

#####     3. Add up all the original digits (those that weren't doubled) and the doubled digits.

#####     4. Check if the total is divisible by 10, this part is why this algorithm is know as the Modulus 10 algorithm, because if the modulus is 0, then the 16 digits are valid, else the digits are invalid.




