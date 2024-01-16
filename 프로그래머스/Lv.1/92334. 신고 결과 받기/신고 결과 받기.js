function solution(id_list, report, k) {
    const obj = {};
    const answer = {};
    
    for(const id of id_list) {
        answer[id] = 0;
    }
    
    for(const str of report) {
        const [value, key] = str.split(' ');
        if(obj[key]) {
            obj[key].add(value);
        } else {
            obj[key] = new Set();
            obj[key].add(value);
        }
    }
    
    for(const value of Object.values(obj)) {
        if(value.size >= k) {
            for(const id of value) {
                answer[id]++;
            }
        }
    }
    
    return Object.values(answer);
}