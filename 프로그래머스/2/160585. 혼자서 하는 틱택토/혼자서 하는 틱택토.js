function solution(board) {
    let count = { O : 0, X : 0 };
    let bingo = { O : 0, X : 0, total : 0 };
    
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            const current = board[i][j];
            if(current !== '.') {
                count[current]++;
                if(i === 0 && current === board[i + 1][j] && current === board[i + 2][j]) {
                    bingo[current]++;
                    bingo['total']++;
                }
            
                if(j === 0 && current === board[i][j + 1] && current === board[i][j + 2]) {
                    bingo[current]++;
                    bingo['total']++;
                }
            
                if(i === 0 && j === 0 && current === board[i + 1][j + 1] && current === board[i + 2][j + 2]) {
                    bingo[current]++;
                    bingo['total']++;
                } else if (i === 0 && j === 2 && current === board[i + 1][j - 1] && current === board[i + 2][j - 2]) {
                    bingo[current]++;
                    bingo['total']++;
                }
            }
        }
    }
        
    if(count['O'] < count['X']) {
        return 0;
    }
    
    if(count['O'] - count['X'] > 1) {
        return 0;
    }
    
    if(bingo['O'] > 0 && bingo['X'] > 0) {
        return 0;
    }
    
    if(bingo['O'] === 1) {
        if(count['O'] === count['X']) {
            return 0;
        }
        
    }
    
    if(bingo['X'] === 1) {
        if(count['O'] !== count['X']) {
            return 0;
        }
    }

    return 1;
}