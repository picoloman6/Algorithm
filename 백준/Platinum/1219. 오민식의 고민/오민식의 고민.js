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
  const [n, start, end] = input[0].split(" ").map(Number);
  const incomes = input[input.length - 1].split(" ").map(Number);
  const edges = [];
  const dist = Array.from({ length: n }, () => -Infinity);

  for (let i = 1; i < input.length - 1; i++) {
    const edge = input[i].split(" ").map(Number);
    edges.push(edge);
  }

  dist[start] = incomes[start];

  for (let i = 0; i < n + 101; i++) {
    for (let [s, e, c] of edges) {
      if (dist[s] === -Infinity) {
        continue;
      }

      if (dist[s] === Infinity) {
        dist[e] = Infinity;
      } else if (dist[s] + incomes[e] - c > dist[e]) {
        dist[e] = dist[s] + incomes[e] - c;
        if (i >= n) {
          dist[e] = Infinity;
        }
      }
    }
  }

  if (dist[end] === -Infinity) {
    console.log("gg");
  } else if (dist[end] === Infinity) {
    console.log("Gee");
  } else {
    console.log(dist[end]);
  }
};