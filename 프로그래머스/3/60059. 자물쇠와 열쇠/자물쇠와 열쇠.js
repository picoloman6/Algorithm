// 경우의 수가 적어 보여서 dfs + 백트랙킹으로 푸는 것 같음
// 어떤 규칙으로 dfs 돌릴지 생각해보기
// 90도 회전법 -> 기존 y표를 새로운 x좌표로, 길이 + 1 - 기존 x좌표를 새로운 y좌표로
// 1, 4 -> 4, 4 -> 5, 2 -> 2, 1
// 2, 1 -> 1, 4 -> 4, 5 -> 5, 2
// 4, 2 -> 2, 2 -> 2, 4 -> 4, 4
// 5, 4 -> 4, 1 -> 1, 2 -> 2, 5
// key를 어떻게 이동시킬 것인가?
function unlock(key, lock, dx, dy) {
    const result = Array.from({length : lock.length}, () => Array.from({length : lock.length}, () => 0));
    for(let i = 0; i < lock.length; i++) {
        for(let j = 0; j < lock.length; j++) {
            result[i][j] += lock[i][j];
        }
    }
    
    for(let i = 0; i < key.length; i++) {
        for(let j = 0; j < key.length; j++) {
            const nx = i + dx;
            const ny = j + dy;
            if(nx > -1 && nx < result.length && ny > -1 && ny < result.length) {
                result[nx][ny] += key[i][j];
            }
        }
    }
    
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result.length; j++) {
            if(result[i][j] !== 1) {
                return false;
            }
        }
    }

    return true;
}

function solution(key, lock) {
    let count = 0;
    let answer = false;
    while(count < 4 && answer === false) {
        for(let i = 0; i < lock.length; i++) {
            for(let j = 0; j < lock.length; j++) {
                if(unlock(key, lock, i, j)) {
                    return true;
                }
                
                if(unlock(key, lock, -i, -j)) {
                    return true;
                }
                
                if(unlock(key, lock, i, -j)) {
                    return true;
                }
                
                if(unlock(key, lock, -i, j)) {
                    return true;
                }
            }
        }
        
        const newKey = Array.from({length : key.length}, () => []);
        for(let i = 0; i < key.length; i++) {
            for(let j = 0; j < key.length ; j++) {
                newKey[j][newKey.length - 1 - i] = key[i][j];
            }
        }
        key = newKey;
        count++;
    }
    return answer;
}