function solution(alp, cop, problems) {
    let maxAlp = 0;
    let maxCop = 0;
    let dp = [];
        
    for(let [alpReq, copReq] of problems) {
        maxAlp = Math.max(maxAlp, alpReq);
        maxCop = Math.max(maxCop, copReq);
    }
    
    alp = Math.min(alp, maxAlp);
    cop = Math.min(cop, maxCop);
    
    dp = Array.from({ length : maxAlp + 1 }, () => new Array(maxCop + 1).fill(300));
    dp[alp][cop] = 0;
    
    for(let i = alp; i <= maxAlp; i++) {
        for(let j = cop; j <= maxCop; j++) {
            if(i + 1 <= maxAlp) {
                dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
            }
            
            if(j + 1 <= maxCop) {
                dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
            }
            for(let [alpReq, copReq, alpRwd, copRwd, cost] of problems) {
                if(i >= alpReq && j >= copReq) {
                    const na = Math.min(maxAlp, i + alpRwd);
                    const nc = Math.min(maxCop, j + copRwd);
                    dp[na][nc] = Math.min(dp[na][nc], dp[i][j] + cost);
                }
            }
        }
    }
    
    
//     for(let i = 0; i <= maxAlp; i++) {
//         const tmp = [];
//         const copValue = Math.max(i - alp, 0);
//         for(let j = 0; j <= maxCop; j++) {
//             const alpValue = Math.max(j - cop, 0);
//             tmp.push(alpValue + copValue);
//         }
//         dp.push(tmp);
//     }

//     for(let [alpReq, copReq, alpRwd, copRwd, cost] of problems) {
//         for(let i = alpReq; i <= maxAlp; i++) {
//             for(let j = copReq; j <= maxCop; j++) {
//                 const na = Math.min(maxAlp, i + alpRwd);
//                 const nc = Math.min(maxCop, j + copRwd);
//                 dp[na][nc] = Math.min(dp[na][nc], dp[i][j] + cost);
//             }
//         }
//     }

    return dp[maxAlp][maxCop];
}