const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(...line.split(" "));
}).on("close", () => {
  const [min, max] = input.map((v) => v * 1);
  solution(min, max);
});

const findPrimes = (max) => {
  const primes = [];
  const arr = Array.from({ length: max + 1 }, () => true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i < Math.sqrt(max) + 1; i++) {
    for (let j = i * 2; j < max + 1; j += i) {
      if (arr[j] === true) {
        arr[j] = false;
      }
    }
  }

  arr.forEach((v, i) => {
    if (v === true) {
      primes.push(i);
    }
  });

  return primes;
};

const solution = (min, max) => {
  let answer = max - min + 1;
  const numbers = Array.from({ length: max - min + 1 }, () => true);
  const primes = findPrimes(Math.sqrt(max));

  primes.forEach((v) => {
    const pow = v ** 2;
    const startIdx = Math.ceil(min / pow) * pow - min;

    for (let i = startIdx; i < numbers.length; i += pow) {
      if (numbers[i] === true) {
        numbers[i] = false;
        answer--;
      }
    }
  });

  console.log(answer);
};