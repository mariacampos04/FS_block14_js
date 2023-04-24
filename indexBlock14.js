// create an array with both odd and even numbers
// create a loop in which it goes through all values
// if num % 2 == 0 it is even
// if there is a remainder then it is odd
// Create a new array in which only the odd numbers come out.

const num = [70, 42, 55, 81, 21, 91, 34];
const odd = [];
for (let i = 0; i < num.length; i++) {
    if ((num[i] % 2) === 1) {
        odd.push(num[i]);
        
    }

}
console.log(odd);

//write an algorithm that accepts a string of lowercase letter.
//Print the word followed by how many consonants and vowels it has.

//create a string variable with lower case letters
//create two variables - consonants - vowels
//loop through the string and filter out both variables
//accumulate both variables
//print output

let string = ("textbook");;

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < string.length; i++) {

    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
        vowelsCount++
    }
    else {
        consonantsCount++
    }
}
console.log('Your string "' + string + '"' + " has " + consonantsCount + " consonants and " + vowelsCount + " vowels.")


// write an algorithm that creates a new array in reverse order

//create array with test values
//create another array with the original array values in reverse
//print values out

const num3 = [1, 2, 3];
const num3reverse = num3.reverse();
console.log(num3reverse);

//write an algorithm that prints each number form 1 to 100 on a new line.
//for each multiple of 3 print fizz instead of the number
//for each multiple of 5 print buss instead of the number
//for numbers that are multiples of both 3 and 5 print fizzbuzz instead of the number

//create a loop that prints out the number 1 - 100
//set an if statement for both multiples of 3 and 5
//set if statement for multiples of 3
//set if statement for multiples of 5
//set else for the numbers that don't meet this condition.


for (let i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
    } else if ((i % 3) == 0) {   
        console.log("Fizz");
    } else if ((i % 5) == 0) {       
        console.log("Buzz");
    }
    else{console.log(i);}    
}

