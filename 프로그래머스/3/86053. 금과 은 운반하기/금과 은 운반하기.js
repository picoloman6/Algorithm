function solution(a, b, g, s, w, t) {
    let left = 1;
    let right = 20000000000000000;
    let answer = right;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let totalGold = 0;
        let totalSilver = 0;
        let totalMineral = 0;
        
        for(let i = 0; i < g.length; i++) {
            let cnt = Math.floor((mid) / (t[i] * 2));
            let totalWeight = w[i] * cnt;
            
            mid % (t[i] * 2) >= t[i] && cnt++;
            
            const max = w[i] * cnt;
            
            totalGold += Math.min(g[i], max);
            totalSilver += Math.min(s[i], max);
            totalMineral += Math.min(g[i] + s[i], max);
        }
        
        if(totalGold >= a && totalSilver >= b && totalMineral >= a + b)  {
            answer = Math.min(answer, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}