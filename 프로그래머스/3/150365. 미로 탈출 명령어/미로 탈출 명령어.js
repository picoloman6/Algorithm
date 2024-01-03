function dfs(dirs, max, target, answer, x, y, word) {
    const [n, m] = max;
    const [r, c, k] = target;
    
    if(answer[0] !== 'impossible') {
        return;
    } else {
        for(let [dx, dy, dw] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            const nw = word + dw;
            const count = Math.abs(r - nx) + Math.abs(c - ny);
            
            if(nx === r && ny === c && nw.length === k
               && answer[0] === 'impossible') {
                answer[0] = nw;
                break;
            }
            
            if(0 < nx && nx <= n && 0 < ny && ny <= m 
               && nw.length < k && count <= k - nw.length) {
                dfs(dirs, max, target, answer, nx, ny, nw);
            }
        }
    }
}

function solution(n, m, x, y, r, c, k) {
    const answer = ['impossible'];
    const dirs = [[1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r'], [-1, 0, 'u']];
    const max = [n, m];
    const target = [r, c, k];
    
    const count = Math.abs(x - r) + Math.abs(y - c);
    
    if((k - count) % 2 === 1) {
        return answer[0];
    }
    
    dfs(dirs, max, target, answer, x, y, '');
    
    return answer[0];
}