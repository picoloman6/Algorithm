function solution(n, lost, reserve) {
    let answer = 0;
    const arr = Array.from({ length : n + 1 }, () => 1);
    
    lost.forEach((v) => {
        arr[v]--;
    });
    
    reserve.forEach((v) => {
        arr[v]++;
    });
        
    for(let i = 1; i<= n; i++) {
        if(arr[i] > 0) {
            answer++;
        } else {
            if(arr[i - 1] === 2) {
                arr[i - 1]--;
                answer++;
            } else if(arr[i + 1] === 2) {
                arr[i + 1]--;
                answer++;
            }
        }
    }
    
    return answer;
}