const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

const find = (parents, idx) => {
  if (parents[idx] !== idx) {
    parents[idx] = find(parents, parents[idx]);
  }

  return parents[idx];
};

const union = (parents, idx1, idx2) => {
  const p = find(parents, idx1);
  const c = find(parents, idx2);

  if (p !== c) {
    parents[c] = p;
  }
};

const solution = (input) => {
  const n = input[0] * 1;
  const graph = [];
  const routes = input[input.length - 1].split(' ').map(Number);
  const parents = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = 2; i < n + 2; i++) {
    graph.push(input[i].split(' ').map(Number));
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (graph[i][j] === 1) {
        union(parents, i + 1, j + 1);
      }
    }
  }

  for (let i = 1; i < routes.length; i++) {
    const a = find(parents, routes[i]);
    const b = find(parents, routes[i - 1]);

    if (a !== b) {
      console.log('NO');
      return;
    }
  }

  console.log('YES');
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution(input);
});
