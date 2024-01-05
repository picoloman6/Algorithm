function solution(keymap, targets) {
    const answer = [];
    const keyPad = {};
    
    for(const keys of keymap) {
        for(let i = 0; i < keys.length; i++) {
            const letter = keys[i];
            if(!keyPad[letter] || keyPad[letter] > i + 1) {
                keyPad[letter] = i + 1;
            }
        }
    }
    
    for(const target of targets) {
        let sum = 0;
        for(const letter of target) {
            if(keyPad[letter]) {
                sum += keyPad[letter];
            } else {
                sum = -1;
                break;
            }
        }
        answer.push(sum);
    }
    
    return answer;
}