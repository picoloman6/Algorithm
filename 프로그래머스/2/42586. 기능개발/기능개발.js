function solution(progresses, speeds) {
    const answer = [];
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        if(count === 0) {
            max = day;
            count++;
        } else {
            if(max >= day) {
                count++;
            } else {
                answer.push(count);
                max = day;
                count = 1;
            }
        }
    }
    
    if(count !== 0) {
        answer.push(count);
    }
        
    return answer;
}