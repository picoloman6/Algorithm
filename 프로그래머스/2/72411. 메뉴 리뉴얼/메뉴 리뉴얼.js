function dfs(word, L, s, result, obj) {
    if(result.length === L) {
        result = result.split('').sort().join('');
        obj[result] = obj[result] ? obj[result] + 1 : 1;
        return;
    } else {
        for(let i = s; i < word.length; i++) {
            dfs(word, L, i + 1, result + word[i], obj);
        }
    }
}

function solution(orders, course) {
    const answer = [];
    
    for(let length of course) {
        const obj = {};
        for(let order of orders) {
            dfs(order, length, 0, '', obj);
        }
        const max = Object.values(obj).reduce((prev, next) => prev < next ? next : prev, 0);
        if(max > 1) {
            for(let [key, value] of Object.entries(obj)) {
                if(value === max) {
                    answer.push(key);
                }
            }
        }
    }
    
    return answer.sort();
}