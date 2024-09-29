function calTime(s, e) {
    const [sh, sm] = s.split(':');
    const [eh, em] = e.split(':');  
    
    return t = (eh * 1 - sh * 1) * 60 + (em * 1 - sm * 1);
}

function calculator(fees, t) {
    return fees[1] + Math.max(0, Math.ceil((t - fees[0]) / fees[2])) * fees[3]
}

function solution(fees, records) {
    const total = {};
    const tmp = {};
    
    for(const r of records) {
        const [t, n, io] = r.split(' ');
        
        if(io === 'IN') {
            tmp[n] = t;
        } else {
            const time = calTime(tmp[n], t);
            if(total[n]) {
                total[n] += time;
            } else {
                total[n] = time;
            }
            delete tmp[n];
        }
    }
    
    for(const [n, t] of Object.entries(tmp)) {
        const time = calTime(t, '23:59');
        if(total[n]) {
            total[n] += time;
        } else {
            total[n] = time;
        }
    }
    
    return Object.entries(total).sort((a, b) => a[0] - b[0]).map((v) => calculator(fees, v[1]));
}