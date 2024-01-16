function solution(s) {
    let answer = 1;
    const n = s.length;
    
    outer:for(let i = n; i >= 2; i--) {
        for(let j = 0; j < n - i + 1; j++) {
            const word = s.substr(j, i);
            let cnt = 0;
            let left = 0;
            let right = word.length - 1;
            while(word[left] === word[right] && left <= right) {
                cnt++;
                left++;
                right--;
            }
            
            if(cnt === Math.ceil(word.length / 2)) {
                answer = word.length;
                break outer;
            }
        }
    }
    
    return answer;
}