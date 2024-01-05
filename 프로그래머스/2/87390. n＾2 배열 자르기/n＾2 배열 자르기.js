function solution(n, left, right) {
    const answer = [];
    
    
    for(let i = left; i <= right; i++) {
        const row = parseInt(i / n);
        const column = i % n;
        
        answer.push(Math.max(column + 1, row + 1));
    }
    
    return answer;
}