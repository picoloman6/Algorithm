function solution(weights) {
    const sortedWeights = weights.sort((prev, next) => prev - next);
    const obj = {};
    let count = 0;
    for(let weight of sortedWeights) {
        if(obj[weight]) {
            count += obj[weight];
            obj[weight] += 1;
        } else {
            obj[weight] = 1;
        }
    }
    const keys = Object.keys(obj);
    
    for(let i = 0; i < keys.length; i++) {
        for(let j = i + 1; j < keys.length; j++) {
            let divide = keys[j] / keys[i];
            if(divide === 1.5 || divide === 2 || divide === 4 / 3) {
                count = count + obj[keys[i]] * obj[keys[j]];
            }
        }
    }
    
    return count;
}