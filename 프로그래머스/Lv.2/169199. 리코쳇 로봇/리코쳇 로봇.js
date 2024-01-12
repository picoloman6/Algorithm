function bfs(board, start) {
    const answer = [];
    const n = board.length;
    const m = board[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const check = Array.from({ length : n }, () => new Array(m).fill(false));
    const queue = [];
    
    queue.push(start);
    check[start.x][start.y] = true;
    
    while(queue.length > 0) {
        const { x, y, cnt } = queue.shift();
        
        if(board[x][y] === 'G') {
            answer.push(cnt);
            break;
        } else {
            for(const [dx, dy] of dirs) {
                let nx = x + dx;
                let ny = y + dy;

                while(nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] !== 'D') {
                    nx += dx;
                    ny += dy;
                }
                
                nx -= dx;
                ny -= dy;
                
                if(!check[nx][ny]) {
                    queue.push({ x : nx, y : ny, cnt : cnt + 1 });
                    check[nx][ny] = true;
                }
            }
        }
    }
    
    return answer;
}

function solution(board) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'R') {
                const answer = bfs(board, { x : i, y : j, cnt : 0 });
                return answer.length === 0 ? -1 : answer[0];
            }
        }
    }
}