/** 1. Multiples of 3 or 5
 * 
 *If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.
 */

const solution = (number) => {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
};

// console.log(solution(0)); // 0
// console.log(solution(-15)); // 0
// console.log(solution(10)); // 23
// console.log(solution(20)); // 78
// console.log(solution(50)); // 9168
//==================================================================================================================================

/**2. Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

let evenOdd = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

// console.log(evenOdd(0)); // 'Even'
// console.log(evenOdd(2)); // 'Even'
// console.log(evenOdd(3)); // 'Odd'
// console.log(evenOdd(-3)); // 'Odd'
//==================================================================================================================================
/**3. Clock
The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second. */
const past = (h, m, s) => {
  // Your solution
  let hourToMin = h * 60 * 60;
  let minToSec = m * 60;
  return (hourToMin + minToSec + s) * 1000;
};

// console.log(past(0, 0, 0)); // 0
// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 0, 0)); // 3600000
// console.log(past(1, 0, 1)); // 3601000
// console.log(past(1, 1, 1)); // 3661000

//==================================================================================================================================
/**4. Returning Strings
Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today? */
const greet = (name) => {
  //Your solution
  return `Hello, ${name} how are you doing today`;
};

// console.log(greet("Ryan")); // "Hello, Ryan how are you doing today?"
// console.log(greet("Sara")); // "Hello, Sara how are you doing today?"

//==================================================================================================================================
/**5. Century From Year
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in. */
const century = (year) => {
  return Math.ceil(year / 100);
};

// console.log(century(1705)); // 18
// console.log(century(1900)); // 19
// console.log(century(1601)); // 17
// console.log(century(2000)); // 20
// console.log(century(89)); // 1

//==================================================================================================================================
/**6. Keep Hydrated!
Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. Given the time in hours, you need to return the number of litres of water that Nathan will drink, rounded to the smallest value. */
const litres = (time) => {
  // Your solution
  return Math.floor(time * 0.5);
};

// console.log(litres(0)); // 0
// console.log(litres(2)); // 1
// console.log(litres(1.4)); // 0
// console.log(litres(12.3)); // 6
// console.log(litres(0.82)); // 0
// console.log(litres(11.8)); // 5
// console.log(litres(1787)); // 893

//==================================================================================================================================
/**7. Is n Divisible by x and y?
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

 */
const isDivisible = (n, x, y) => {
  // Your solution
  if (n % x === 0 && n % y === 0) {
    return "True";
  } else {
    return "false";
  }
};

// console.log(isDivisible(3, 3, 4)); // false
// console.log(isDivisible(12, 3, 4)); // true
// console.log(isDivisible(8, 3, 4)); // false
// console.log(isDivisible(48, 3, 4)); // true

//==================================================================================================================================
/**8. Vowel Count
Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.

 */

const getCount = (str) => {
  // Your solution
  //   const arr = [...str];
  //   return arr.filter((ele) => ["a", "e", "i", "o", "u"].includes(ele)).length;
  let vowelsCount = 0;
  for (i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

// console.log(getCount("my pyx")); // 0
// console.log(getCount("pear tree")); // 4
// console.log(getCount("abracadabra")); // 5
// console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13

//==================================================================================================================================
/**9. Disemvowel Trolls
Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed. */
const disemvowel = (str) => {
  // Let's use regular expressions (regex)
  return str.replace(/[aeiou]/gi, "");
};
// console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
let strg = "mozillaas";
// console.log(strg[strg.length - 1]);

//==================================================================================================================================
/**write a function tha finds and prints the maximum element in an array of numbers
 * e.g [3,6, 1, 8 4, 9] ==> 9
 * e.g[10,20,30,54,89,23] ==> 89
 */

const returnBiggestIntegerFromSrray = (arrs) => {
  if (!arrs || arrs.length === 0) {
    console.log("please enter few numbers");
  }
  let biggestNumber = arrs[0];
  for (i = 1; i < arrs.length; i++) {
    if (arrs[i] > biggestNumber) {
      biggestNumber = arrs[i];
    }
  }
  return biggestNumber;
};

// console.log(
//   "biggest number is [(100, 20, 30, 54, 89, 23)] ==> ",
//   returnBiggestIntegerFromSrray([(100, 20, 30, 54, 89, 23)])
// );

// console.log(
//   "biggest number is [2, 7, -9, 70, 10, 1, 100.1] ==> ",
//   returnBiggestIntegerFromSrray([2, 7, -9, 70, 10, 1, 100.1])
// );
// console.log(
//   "biggest number is [2, 7, -9, 70, 10, 1, 100.1] ==> ",
//   returnBiggestIntegerFromSrray([])
// );

//==================================================================================================================================
/**write a function to check palindorome
 * eg. level ==> level
 * e.g madam ==> madam
 */

const checkPalindromeFunction = (isPaldrm) => {
  inputString = isPaldrm.toLowerCase();
  const splittedInput = inputString.split("");
  const reverseInput = splittedInput.reverse();
  const reverseString = reverseInput.join("");
  if (inputString === reverseString) {
    return "True";
  } else {
    return "False";
  }
};

// console.log(checkPalindromeFunction("121"));
// console.log(checkPalindromeFunction("MadaM"));
// console.log(checkPalindromeFunction("grgsrg"));

//==================================================================================================================================
/**write a function that return the result of raising a given number to a specified power. input willl be two number 1. base 2. exponent
 * eg. 2,3 : 2*2*2 = 8
 * e.g 5,4 : 5*5*5*5 = 625
 */

const chekPower = (base, exponent) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    console.log(i);

    result = result * base;
  }
  return result;
};

// console.log(chekPower(2, 3));
// console.log(chekPower(5, 4));

//==================================================================================================================================
/**write a function that return the number of vowels and consonant in a given string
 * eg. Hello world = 3 vowels and 7 consonants
 * e.g shamsher kc = 2 vowels and 8 consonants
 */

const checkVowelsConsonents = (inputString) => {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/ /g, "");
  // console.log("after cleanup is " + inputString);

  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let vowelCount = 0;
  let consunantCount = 0;

  for (i = 0; i < inputString.length; i++) {
    // console.log(inputString[i]);
    // console.log(i);
    if (vowels.includes(inputString[i])) {
      vowelCount++;
    } else if (consonants.includes(inputString[i])) {
      consunantCount++;
    }
  }
  return { vowelCount, consunantCount };
};

// console.log(checkVowelsConsonents("shamsher kc"));
// console.log(checkVowelsConsonents("Hello World i am samir"));

//==================================================================================================================================
/**write a function that finds all the factors of a given number
 * eg. 4: 1,2,4
 * e.g: 14: 1,2,7,14
 */

function calculateFactors(inputNumber) {
  if (inputNumber < 1) {
    throw new Error("inputNumber should be greater than zero");
  }
  // Add validation that inputNumber is a number and it is not a decimal number like 1.5

  let result = [];
  for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      result.push(i);
      //console.log(i, "is a factor");
    }
    //console.log(i);
  }

  return result;
}

// console.log("Factors of 4 are", calculateFactors(4));
// console.log("Factors of 14 are", calculateFactors(14));
// console.log("Factors of 35 are", calculateFactors(35));

//==================================================================================================================================
/**write a function that calculate and return the average of set of numbers
 * eg. [1,2,4] : (1+2+4)/3 = 2.333
 * eg. [1,2,7,14] : (1+2+7,14)/4 = 6
 * eg. [1,5,7,35] : (1+5+7+35)/4 = 12
 *
 *
 */

function averageSetNumber(averageN) {
  let totalSum = 0;
  let totalNumber = 0;
  let result;
  for (i = 0; i < averageN.length; i++) {
    //console.log(averageN[i]);
    totalSum = averageN[i] + totalSum;
    //console.log(totalSum);
    totalNumber = averageN.length;
    result = totalSum / totalNumber;
  }
  return result;
  // console.log(totalSum);
  // console.log(totalNumber);
  // console.log(result);
}

// console.log("Result of [1, 2, 4] ==>", averageSetNumber([1, 2, 4]));
// console.log("Result of [1, 2, 7, 14] ==>", averageSetNumber([1, 2, 7, 14]));
// console.log("Result of [1,5,7,35] ==>", averageSetNumber([1, 5, 7, 35]));

//==================================================================================================================================
/**write a function that calculate and print the simple interest on a loan amount
 * simple interest (principal * nterest rate * time duration ) / 100
 * eg. 1000, 5%, 1year = (1000*5*1)/100 = 50
 *eg. =20000, 10%, 5year = (20000*10*5)/100 = 10000
 *
 */

const simpleInterestCalculator = (p, t, r) => {
  let result = (p * t * r) / 100;
  return result;
};

// console.log("amount is ", simpleInterestCalculator(1000, 5, 1));
// console.log("amount is ", simpleInterestCalculator(20000, 10, 5));

//==================================================================================================================================
/**write a function that tells if the given number is prime or not
 * return true if it is prime and return false if it is not a prime number
 * prime number e.g: 2,3,5,7,11,13,17,1923,29
 *
 *
 */

const findPrimeNumber = (getPrimeNB) => {
  let result = true;
  for (i = 2; i < getPrimeNB; i++) {
    console.log(getPrimeNB, "%", i, "is", getPrimeNB % i);
    if (getPrimeNB % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

// console.log("is prime 4: ", findPrimeNumber(4));
// console.log("is prime 29: ", findPrimeNumber(29));
// console.log("is prime 100: ", findPrimeNumber(100));
// console.log("is prime 2: ", findPrimeNumber(2));

//==================================================================================================================================
/**write a function that counts counts and return the number of words in a sentence
 * e.g this is a sentence ==> 4
 * i am ramesh = 3
 *
 *
 */

const wordCounter = (inputWords) => {
  const splitedWord = inputWords.split(" ");
  const nonEmptySplitedWord = splitedWord.filter((elem) => {
    return elem != "";
  });
  // console.log(nonEmptySplitedWord);
  // console.log(splitedWord);

  const countSplitedWords = nonEmptySplitedWord.length;
  // console.log(countSplitedWords);
  return countSplitedWords;
};

// console.log("Number of word is : ", wordCounter("my  name is shamsher"));
// console.log(
//   "Number of word is : ",
//   wordCounter(
//     "Lorem, ipsum dolor     sit  amet consectetur adipisicing elit. Amet molestias dolorem nihil tenetur voluptas odio quae animi et eligendi eum, architecto ex ullam est asperiores incidunt sint doloremque ducimus ipsum."
//   )
// );

//==================================================================================================================================
/**write a function that converts a temperature in celsius to feranheit
 * formula : (celsius * 9/5) + 32
 *
 * e.g. 27 degree celsuis ==> (27 *9/5)+32 = 80.6
 * e.g. 34 degree celsuis ==> (34 *9/5)+32 = 93.2
 *
 */

const temperatureCalculator = (inputDegreeCelsius) => {
  let result = (inputDegreeCelsius * 9) / 5 + 32;
  result = Math.round(result);
  return result;
};
// console.log("27 degree in ferhainheit is : ", temperatureCalculator(27));
// console.log(`76 degree in ferhainheit is : `, temperatureCalculator(76));

//==================================================================================================================================
/**write a function that swaps two numbers
 *
 * e.g. a=5, b=6 : result will be a=6, b=5
 *
 */
let a = 10;
let b = 20;

// console.log(`value of a is : ${a} value of b is : ${b}`);

//lets try to change value it bu normal flow

// a = b;
// b = a;
// console.log(
//   `value of a after norma swapping is : ${a} value of b after normal swapping is : ${b}`
// );

//lets try to change value it by creating new variable

let c = b;
b = a;
a = c;

// console.log(
//   `value of a after creating new variable is : ${a} value of b after creating new variable is : ${b}`
// );

//==================================================================================================================================
/**write a function that shows the number of character
 *
 * e.g. shamsher = 8
 *
 */

let characterCountFunction = (charInput) => {
  let removeSpaceString = charInput.replace(/ /g, "");
  return removeSpaceString.length;
};

// console.log("total character is : ", characterCountFunction(" shamsher  is "));

//==================================================================================================================================
/**write a function that shows the multiplication table of given number
 *
 * e.g. shamsher = 7 = 7*1=7 to 7*10=70
 *
 */

let multiplicationFunction = (n) => {
  let result = [];
  for (i = 1; i <= 10; i++) {
    result.push(n + " X " + i + " = " + n * i);
  }
  return result;
};

// let table = multiplicationFunction(7);
// console.log(table.join("\n"));

// let table2 = multiplicationFunction(1000);
// console.log(table2.join("\n"));
// let table3 = multiplicationFunction(8);
// console.log(table3.join("\n"));

//==================================================================================================================================
/**write a program that check if a number is armstrong or not
 *
 * e.g. 153  = (1^3)+(5^3)+(3^3) = 1+ 125+ 27 = 153 ==> true
 * e.g 370 = (3^3)+(7^3)+(0^3) = 27+ 343+ 0 = 370 ==> true
 * e.g 243 = (2^3)+(4^3)+(3^3) = 8+ 64+ 27 = 96 ==> false
 * some armstrong numbers are : 153, 370, 371, 9474, 54748
 */

const armstrongChecker = (numb) => {
  numToString = numb.toString();
  let Arr = [];

  for (i = 0; i < numToString.length; i++) {
    Arr.push(numToString[i]);
  }
  const length = Arr.length;
  let sum = 0;

  Arr.forEach((d) => {
    // console.log(d, length, Math.pow(d, length));
    const calc = Math.pow(d, length);
    sum = sum + calc;
  });

  if (numb === sum) {
    return true;
  } else {
    return false;
  }
};

// console.log("is armstrong 153: ", armstrongChecker(153));
// console.log("is armstrong 535): ", armstrongChecker(535));
// console.log("is armstrong 54748): ", armstrongChecker(54748));

//==================================================================================================================================
/**write a program that prints number from 1 to N, replacing
 * multiple of 3 eith "Fizz"
 * multiple of 5 with "Buzz"
 * mu;ltiple of 3 and 5 "FixxBuzz"
 *
 *
 */

const fizBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// console.log(fizBuzz(36));

//==================================================================================================================================
/**write a program that prints a number pyramid 
 *
 *
 */


