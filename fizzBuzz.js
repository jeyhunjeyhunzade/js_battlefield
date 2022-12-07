/*
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

const fizzBuzz = function(n) {
    let outputArr = []
    for (i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            outputArr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            outputArr.push("Fizz")
        } else if (i % 5 === 0) {
            outputArr.push("Buzz")
        } else {
            outputArr.push(`${i}`)
        }
    }
    return outputArr;
};

// Big O(n) solution
const fizzBuzzBeast = function(n) {
    return new Array(n).fill(0).map((_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : "Buzz") || `${i}`)
};
