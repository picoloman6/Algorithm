function dfs(maps, check, dirs, sum, x, y) {
    for(const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if(0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length) {
            if(!check[nx][ny] && maps[nx][ny] !== 'X') {
                check[nx][ny] = true;
                sum[0] += maps[nx][ny] * 1;
                dfs(maps, check, dirs, sum, nx, ny);
            }
        }
    }
}

function solution(maps) {
    const answer = [];
    const check = Array.from({ length : maps.length }, () => new Array(maps[0].length).fill(false));
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(!check[i][j] && maps[i][j] !== 'X') {
                const sum = [maps[i][j] * 1];
                check[i][j] = true;
                dfs(maps, check, dirs, sum, i, j);
                answer.push(sum[0]);
            }
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}