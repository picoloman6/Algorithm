function solution(n) {
    const answer = Array.from({ length : n}, (_,i) => new Array(i + 1).fill(0));
    
    let x = -1;
    let y = 0;
    let num = 1;
    let max = 0;
    
    for(const arr of answer) {
        max += arr.length;
    }
    
    while(num <= max) {
        for(let i = 1; i <= n; i++) {
            x++;
            answer[x][y] = num;
            num++;
        }
        
        for(let i = 1; i <= n - 1; i++) {
            y++;
            answer[x][y] = num;
            num++
        }
        
        for(let i = 1; i <= n - 2; i++) {
            x--;
            y--;
            answer[x][y] = num;
            num++;
        }
        n -= 3;
    }
    
    return answer.flatMap((v) => v);
}