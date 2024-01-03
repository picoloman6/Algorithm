function solution(picks, minerals) {
    const works = [];
    const sum = picks.reduce((prev, next) => prev + next, 0);
    let idx = 0;
    let answer = 0;
        
    while(idx < minerals.length && idx < sum * 5) {
        const obj = { 'diamond' : 0, 'iron' : 0, 'stone' : 0 };
        for(let i = idx; i < idx + 5; i++) {
            const mineral = minerals[i];
            if(mineral !== undefined) {
                obj[mineral]++;
            }
        }
        idx += 5;
        works.push(obj);
    }
    
    works.sort((prev, next) => {
        if(prev['diamond'] < next['diamond']) {
            return 1;
        }
    
        if(prev['diamond'] > next['diamond']) {
            return -1;
        }
        
        if(prev['iron'] < next['iron']) {
            return 1;
        }
    
        if(prev['iron'] > next['iron']) {
            return -1;
        }
        
        return next['stone'] - prev['stone'];
    });
    
    for(let work of works) {
        if(picks[0] > 0) {
            answer += Object.values(work).reduce((prev, next) => prev + next, 0);
            picks[0]--;
        } else {
            if(picks[1] > 0) {
                for(let key of Object.keys(work)) {
                    if(key === 'diamond') {
                        answer += work[key] * 5;
                    } else {
                        answer += work[key];
                    }
                }
                picks[1]--;
            } else {
                for(let key of Object.keys(work)) {
                    if(key === 'diamond') {
                        answer += work[key] * 25;
                    } else if(key === 'iron') {
                        answer += work[key] * 5;
                    } else {
                        answer += work[key];
                    }
                }
                picks[2]--;
            }
        }
    }
    return answer;
}