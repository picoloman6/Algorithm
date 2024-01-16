// 완전 탐색은 절대 아님 => 진짜? => 아니 어차피 쏘고 안쏘고라 2의 11승
// 화살 쏘는 규칙이 먼저 필요함
function caculator(info, result, diff, answer) {
    let ryan = 0;
    let apeach = 0;
    for(let i = 0; i < 11; i++) {
        if(info[i] > 0 || result[i] > 0) {
            if(info[i] >= result[i]) {
                apeach += (10 - i);
            } else {
                ryan += (10 - i);
            }
        }
    }
    
    if(ryan > apeach && ryan - apeach > diff[0]) {
        diff[0] = ryan - apeach;
        for(let i = 0; i < info.length; i++) {
            answer[i] = result[i];
        }
    } else if(ryan > apeach && ryan - apeach === diff[0]) {
        for(let i = 10; i > - 1; i--) {
            if(result[i] > 0 || answer[i] > 0) {
                if(result[i] > answer[i]) {
                    for(let i = 0; i < info.length; i++) {
                        answer[i] = result[i];
                    }
                    break;
                } else if(result[i] <= answer[i]){
                    break;
                }
            }
        }
    }
}

// function findMin(answer, result) {
//     let ryan = 10;
//     let apeach = 
// }


function dfs(n, info, diff, L, result, answer) {
    if(n === 0 || L >= 11 ) {
        if(n === 0) {
            caculator(info, result, diff, answer);
        }
        return;
    } else {
        const arrow = n - info[L] + 1 > 0 ? info[L] + 1 : n;
        if(n > 0) {
            result[L] = arrow;
            n -= arrow;
            dfs(n, info, diff, L + 1, result, answer);
            result[L] = 0;
            n += arrow;
            dfs(n, info, diff, L + 1, result, answer);
        }
    }
}

function solution(n, info) {
    const result = Array.from({length : 11}, () => 0);
    const diff = [0];
    const answer = [-1];
    dfs(n, info, diff, 0, result, answer);
    return answer;
}