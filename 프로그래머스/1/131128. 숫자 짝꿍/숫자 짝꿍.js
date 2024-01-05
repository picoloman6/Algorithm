// 더 크면 앞 배열 idx 늘리기

function solution(X, Y) {
    const answer = [];
    const obj = {};
    
    for(const key of X) {
        if(obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    
    for(const key of Y) {
        if(obj[key] > 0) {
            obj[key]--;
            answer.push(key);
        }
    }
    
    answer.sort().reverse();

    if(answer.length === 0) {
        return '-1';
    } else if(answer[0] === '0'){
        return '0'
    } else {
        return answer.sort().reverse().join('');
    }
}