function solution(numbers, target) {
    let answer = 0;
    
    function dfs(L, sum) {
        if(L === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        } else {
            dfs(L + 1, sum + numbers[L]);
            dfs(L + 1, sum - numbers[L]);            
        }
    }
    
    dfs(0, 0);
        
    return answer;
}