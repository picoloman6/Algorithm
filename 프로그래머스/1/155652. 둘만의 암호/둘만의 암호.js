function solution(s, skip, index) {
    let answer = '';
    const letters = [];
    
    for(let i = 0; i < 26; i++) {
        const alphabet = String.fromCharCode(i + 97);
        !skip.includes(alphabet) && letters.push(alphabet);
    }
        
    for(let value of s) {
        let idx = letters.findIndex((v) => v === value) + index;
        
        while(idx > letters.length - 1) {
            idx -= letters.length;
        }
                
        answer += letters[idx];
    }
    
    return answer;
}