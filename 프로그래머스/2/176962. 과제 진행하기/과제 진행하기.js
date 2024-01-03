function solution(plans) {
    const sortedPlans = plans.map((v1) => {
        const [name, start, play] = v1;
        let time = 0;
        start.split(':').forEach((v2, i) => {
            let multi = i === 0 ? 60 : 1;
            time += v2 * multi;
        })
        return [name, time, play * 1];
    }).sort((prev, next) => next[1] - prev[1]);
    const waitings = [];
    const answer = [];
    let time = sortedPlans[sortedPlans.length - 1][1];
    
    while(sortedPlans.length > 0) {
        let current;
        let next;
        if(waitings.length > 0 && 
           time < sortedPlans[sortedPlans.length - 1][1]) {
            current = waitings.pop();
        } else {
            current = sortedPlans.pop();
        }
        
        if(sortedPlans.length > 0) {
            next = sortedPlans[sortedPlans.length - 1];
        } else {
            answer.push(current[0]);
            break;
        }
        
        const standard = time > current[1] ? time : current[1];
        if(standard + current[2] <= next[1]) {
            if(time > current[1]) {
                time += current[2];
            } else {
                time = current[1] + current[2];
            }
            answer.push(current[0]);
        } else {
            current[2] -= next[1] - time;
            time = next[1];
            waitings.push(current);
        }
    }
    
    while(waitings.length > 0) {
        answer.push(waitings.pop()[0]);
    }
    
    return answer;
}