function solution(absolutes, signs) {
    const answer = [];
    
    for(let i = 0; i < absolutes.length; i++) {
        const value = signs[i] ? absolutes[i] : absolutes[i] * -1;
        answer.push(value);
    }
    
    return answer.reduce((cur, acc) => cur + acc, 0);
}