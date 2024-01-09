function solution(n, times) {
    let answer = Infinity;
    let left = 0;
    let right = 1000000000000000000;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = 0;
        
        times.forEach((v) => {
            sum += Math.floor(mid / v);
        });
        
        if(sum < n) {
            left = mid + 1;
        } else if(sum >= n) {
            right = mid - 1;
            if(mid < answer) {
                answer = mid    
            }
        }
    }
    
    return answer;
}