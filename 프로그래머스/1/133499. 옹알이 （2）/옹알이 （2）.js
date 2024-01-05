function solution(babbling) {  
    let answer = babbling.length;
    const set = new Set(['aya', 'ye', 'woo', 'ma']);
    
    for(const word of babbling) {
        const tmp = [];
        for(let i = 0; i < word.length; i++) {
            if(word[i] === 'a' || word[i] === 'w') {
                tmp.push(word[i] + word[i+1] + word[i+2]);
                i += 2;
            } else if(word[i] === 'y' || 'm') {
                tmp.push(word[i] + word[i+1]);
                i++;
            } else {
                answer--;
                break;
            }
        }
        
        for(let i = 0; i < tmp.length; i++) {
            if(!set.has(tmp[i]) || tmp[i] === tmp[i - 1] || tmp[i] === tmp[i + 1]) {
                answer--;
                break;
            }
        }
    }
    
    return answer;
}