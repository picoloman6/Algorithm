const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

const solution = (input) => {
  const [n, , target, start] = input[0].split(' ').map(Number);
  const list = Array.from({ length: n + 1 }, () => []);
  const dist = Array.from({ length: n + 1 }, () => Infinity);
  const queue = [start];
  const answer = [];

  dist[start] = 0;

  for (let i = 1; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    list[s].push(e);
  }

  while (queue.length > 0) {
    const cur = queue.shift();

    for (const next of list[cur]) {
      const newDist = dist[cur] + 1;

      if (newDist <= target && dist[next] > newDist) {
        dist[next] = newDist;
        queue.push(next);
      }
    }
  }

  for (let i = 1; i < dist.length; i++) {
    if (target === dist[i]) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    console.log(-1);
  } else {
    answer.sort((a, b) => a - b);

    for (const num of answer) {
      console.log(num);
    }
  }
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution(input);
});
