const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line * 1);
}).on("close", () => {
  const [n, k] = input;
  solution(n, k);
});

const solution = (n, k) => {
  let answer = 0;
  let left = 0;
  let right = k;

  while (left <= right) {
    let cnt = 0;
    const mid = Math.floor((left + right) / 2);

    for (let i = 1; i <= n; i++) {
      cnt += Math.min(Math.floor(mid / i), n);
    }

    if (cnt >= k) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
};
