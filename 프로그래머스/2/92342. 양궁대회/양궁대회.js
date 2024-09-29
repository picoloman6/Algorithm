function calculator(info, ryan) {
    let point = 0;
    
    for(let i = 0; i < 11; i++) {
        if(info[i] < ryan[i]) {
            point += (10 - i);
        } else if(info[i] > 0) {
            point -= (10 - i);
        }
    }
    
    return point;
}

function dfs(info, n, L, ryan, max, answer) {
    if(L === 11 || n === 0) {
        ryan[10] += n;
        const point = calculator(info, ryan);
                
        if(point > max[0]) {
            max[0] = point;
            for(let i = 0; i < 11; i++) {
                answer[i] = ryan[i];
            }
        } else if(point === max[0]) {
            for(let i = 10; i >= 0; i--) {
                if(answer[i] < ryan[i]) {
                    for(let j = 0; j < 11; j++) {
                        answer[j] = ryan[j];
                    }
                    break;
                } else if(answer[i] > ryan[i]) {
                    break;
                }
            }
        }
        
        ryan[10] -= n;
        return;
    } else {
        
        const target = info[L] + 1;
        if(target <= n) {
            ryan[L] += target;
            dfs(info, n - target, L + 1, ryan, max, answer);    
            ryan[L] -= target;
        }
        
                dfs(info, n, L + 1, ryan, max, answer);

    }
}

function solution(n, info) {
    const max = [0]
    const answer = Array.from({ length : 11 }, () => 0);
    
    dfs(info, n, 0, Array.from({ length : 11 }, () => 0), max, answer);
            
    if(max[0] === 0) {
        return [-1];
    } else {
        return answer;
    }
}