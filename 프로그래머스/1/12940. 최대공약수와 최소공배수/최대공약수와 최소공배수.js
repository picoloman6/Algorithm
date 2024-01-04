function solution(n, m) {
    const answer = [];
    
    for(let i = 1; i <= Math.min(n, m); i++) {
        if(n % i === 0 && m % i === 0) {
            answer[0] = i;
        }
    }
    
    let cnt = Math.max(n, n);
    while(!answer[1]) {
        if(cnt % n === 0 && cnt % m === 0) {
            answer[1] = cnt;
        }
        cnt++;
    }
    
    
    
    return answer;
}