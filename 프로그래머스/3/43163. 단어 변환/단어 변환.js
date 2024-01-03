function compareWords(first, second) {
    let count = first.length;
    for(let i = 0; i < first.length; i++) {
        first[i] === second[i] ? count-- : '';
    }
    return count === 1;
}


function dfs(words, check, answer, target, L, arr) {
    if(L === words.length + 1 || arr.includes(target)) {
        const index = arr.findIndex((v) => v === target);
        if(index < answer[0]) {
            answer[0] = index;
        }
        return;
    } else {
        for(let i = 0; i < words.length; i++) {
            if(check[i] === 0) {
                if(compareWords(arr[arr.length - 1], words[i])) {
                    check[i] = 1;
                    arr[L] = words[i];
                    dfs(words, check, answer, target, L + 1, arr);
                    arr.splice(L);
                    check[i] = 0;
                }
                
            }
            
        }
    }
}

function solution(begin, target, words) {
    const answer = [51];
    const check = Array.from({length : words.length}, () => 0);
    const arr = [begin];
    
    if(!words.includes(target)) {
        return 0;
    }
    
    dfs(words, check, answer, target, 1, [begin]);
    return answer[0] === 51 ? 0 : answer[0];
}