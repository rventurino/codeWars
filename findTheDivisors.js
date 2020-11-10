/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/
console.log(divisors(353));
function divisors(integer) {
  let allAnswers = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      allAnswers.push(i);
    }
  }
  if (allAnswers.length === undefined || allAnswers.length === 0) {
    return `${integer} is prime`;
  } else {
    return allAnswers;
  }
}
