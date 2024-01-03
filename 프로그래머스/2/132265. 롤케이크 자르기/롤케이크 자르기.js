function solution(topping) {
    let answer = 0;
    // let idx = 0;
    let total = new Set(topping).size;
    const set = new Set();
    const obj = {};
    
    topping.forEach((value) => {
        obj[value] ? obj[value]++ : obj[value] = 1;
    });
        
    while(topping.length > 0) {
        const current = topping.pop();
        set.add(current);
        obj[current]--
        if(obj[current] === 0) {
            total--;
        }
        if(set.size === total) {
            answer++;
        } else if(set.size > total) {
            break;
        }
    }
    
    return answer;
}