function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        let same = 1;
        let diff = 0;
        for(let j = i + 1; j < s.length; j++) {
            if(s[i] === s[j]) {
                same++;
            } else {
                diff++;
            }
                        
            if(same === diff) {
                break;
            }
        }
        
        i += same + diff - 1;
                
        answer++;
    }

    
    return answer;
}