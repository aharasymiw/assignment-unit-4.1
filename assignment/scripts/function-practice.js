console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log('Test - should say "Hello, Andrew!"', helloName("Andrew"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log('Test - should say 10', addNumbers(3, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log('Test - should say 120', multiplyThree(3, 4, 10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}

console.log('getLast - should say "poprocks"', getLast([1, "two", true, "poprocks"]));
console.log('getLast - should say "undefined"', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

console.log('find - should say "true"', find("two", [1, "two", true, "poprocks"]));
console.log('find - should say "false"', find("Pepsi", [1, "two", true, "poprocks"]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  }
  return false;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (element of array) {
    sum += element
  }
  return sum;
}

console.log('sumAll - should say 17', sumAll([5, 4, 6, 1, 1]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array) {
  returnArray = []

  for (element of array) {
    if (element > 0) {
      returnArray.push(element);
    }
  }

  return returnArray;
}

let array1 = [1, 17, -6, 0, 5, 2, -3];
console.log('positiveArray - should say [1, 17, 5, 2]', positiveArray(array1));
console.log('array - should say [1, 17, -6, 0, 5, 2, -3]', array1);

let array2 = [-6, 0, -3, -2, -3];
console.log('positiveArray - should say []', positiveArray(array2));
console.log('array - should say [-6, 0, -3, -2, -3]', array2);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// Write a function that takes an integer minutes and converts it to seconds.

function minutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('minutesToSeconds - should say 300', minutesToSeconds(5));
