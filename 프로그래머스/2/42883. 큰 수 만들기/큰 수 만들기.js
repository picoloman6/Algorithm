function solution(number, k) {
    const answer = [];
    
    for(let char of number) {
        const digit = char * 1
        if(answer.length === 0) {
            answer.push(digit);
        } else {
            while(answer && answer[answer.length - 1] < digit && k > 0) {
                answer.pop();
                k--
            }
            answer.push(digit);
        }
    }
    
    while(k > 0) {
        answer.pop();
        k--;
    }
    
    return answer.join('');
}