function solution(x, y, n) {
    const dp = Array.from({ length : y + 1 }, () => Infinity);
    
    for(let i = 0; i <= x; i++) {
        dp[i] = 0;
    }
    
    for(let i = x; i < y; i++) {
        if(i + n <= y) {
            dp[i + n] = Math.min(dp[i] + 1, dp[i + n]);
        }
        
        if(i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2]);
        }
        
        if(i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3]);
        }
        
    }
            
    return dp[y] === Infinity ? -1 : dp[y];
}

// function solution(x, y, n) {
//     const arr = Array.from({ length : y + 1 }, () => Infinity);
    
//     for(let i = 0; i <= x; i++) {
//         arr[i] = 0;
//     }
    
//     for(let i = x; i < y; i++) {
//         if(i + n <= y) {
//             arr[i + n] = Math.min(arr[i] + 1, arr[i + n]);
//         }
//     }
    
//     for(let i = x; i < y; i++) {
//         if(i * 2 <= y) {
//             arr[i * 2] = Math.min(arr[i] + 1, arr[i * 2]);
//         }
//     }
    
//     for(let i = x; i < y; i++) {
//         if(i * 3 <= y) {
//             arr[i * 3] = Math.min(arr[i] + 1, arr[i * 3]);
//         }
//     }
    
//     console.log(arr);
        
//     return arr[y] === Infinity ? -1 : arr[y];
// }