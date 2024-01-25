function solution(n, results) {
    let answer = 0;
    const graph = Array.from({ length : n }, () => new Array(n).fill(0));
    const rowSum = Array.from({ length : n }, () => 0);
    const colSum = Array.from({ length : n }, () => 0);
    
    for(const [winner, loser] of results) {
        graph[winner - 1][loser - 1] = 1;
    }
        
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(graph[i][j] === 0 && graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            rowSum[i] += graph[i][j];
            colSum[i] += graph[j][i];
        }
    }
    
    for(let i = 0; i < n; i++) {
        rowSum[i] + colSum[i] === n - 1 && answer++;
    }
    
    return answer;
}