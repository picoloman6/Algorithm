const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);
});

const solution = (input) => {
  const n = input[0] * 1;
  const list = Array.from({ length: n }, () => new Array(n).fill(Infinity));

  for (let i = 0; i < list.length; i++) {
    list[i][i] = 0;
  }

  for (let i = 2; i < input.length; i++) {
    const [s, e, c] = input[i].split(" ").map(Number);
    if (list[s - 1][e - 1] > c) {
      list[s - 1][e - 1] = c;
    }
  }

  for (let k = 0; k < list.length; k++) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        list[i][j] = Math.min(list[i][j], list[i][k] + list[k][j]);
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    const tmp = [];
    for (let j = 0; j < list.length; j++) {
      if (!isFinite(list[i][j])) {
        tmp.push(0);
      } else {
        tmp.push(list[i][j]);
      }
    }
    console.log(tmp.join(" "));
  }
};