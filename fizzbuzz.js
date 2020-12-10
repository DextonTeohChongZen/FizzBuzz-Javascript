// FizzBuzz is a staple in learning how to write functional code. Here's how the logic of FizzBuzz goes:

// Take in a number between 1 and 100

// Look up window.prompt(), but be careful of what it gives you!
// Any number that is a multiple of 3 should output "Fizz" to the user.

// Any number that is a multiple of 5 should output "Buzz" to the user.

// Any number that is a multiple of 3 and 5 should output "FizzBuzz" to the user.

// Hint: You will need to look up how to use modulo in JavaScript. You can access it with the % sign.
// If the number does not fall under a multiple of 3 or 5, just return the number you keyed in to the user.

// Extra: Here are some extra features you may try to introduce if you find the above too easy.

// Only allow the user to input a number from 1-100. If the number exceeds this value, alert them to pick a lower number.
// If a user passes in anything besides a number, i.e. a word, letter or phrase, alert them they are passing in "gobbledygook"


const number = prompt('Enter a number between 1 - 100:');

if (number >=1 || number <=100) {
    if (number % 3 == 0 && number % 5 == 0) {
        alert ('FizzBuzz');
    } else if (number % 3 == 0) {
        alert ('Fizz');
    } else if (number % 5 == 0) {
        alert ('Buzz');
    } else alert ('Number is: ' + number)
}
if (number <1) {
    alert ('Pick a higher number')
}
if (number >100) {
    alert ('Pick a lower number')
}
if (!(number >=1 || number <=100)) {
    alert ('gobbledygook');
}