const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution(input);
});

const dfs = (list, ban, check, n, answer) => {
  let child = 0;
  check[n] = true;

  for (const next of list[n]) {
    if (!check[next] && next !== ban) {
      dfs(list, ban, check, next, answer);
      child++;
    }
  }

  if (child === 0) {
    answer[0]++;
  }
};

const solution = (input) => {
  let start = 0;
  const n = input[0] * 1;
  const parents = input[1].split(' ').map(Number);
  const ban = input[2] * 1;
  const list = Array.from({ length: n }, () => []);
  const answer = [0];
  const check = Array.from({ length: n }, () => false);

  for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    if (parent === -1) {
      start = i;
    } else {
      list[parent].push(i);
      list[i].push(parent);
    }
  }

  if (ban === start) {
    console.log(0);
  } else {
    dfs(list, ban, check, start, answer);
    console.log(answer[0]);
  }
};