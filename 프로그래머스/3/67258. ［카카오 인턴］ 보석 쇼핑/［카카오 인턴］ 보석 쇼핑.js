function solution(gems) {
    const answers = [];
    const size = new Set(gems).size;
    let count = 0;
    let left = 0;
    let right = 0;
    
    const tmp = {};
    while(left <= right && right <= gems.length) {
        if(count < size) {
            const value = gems[right];
            if(!tmp[value]) {
                count++;
                tmp[value] = 1;
            } else {
                tmp[value]++;
            }
            right++;
        } else {
            const value = gems[left];
            answers.push([left + 1, right]);
            tmp[value]--;
            if(tmp[value] === 0) {
                count--;
            }
            left++;
        }
    }
    
    return answers.reduce((prev, next) => prev[1] - prev[0] > next[1] - next[0] ? next : prev, [0, 100000]);
}