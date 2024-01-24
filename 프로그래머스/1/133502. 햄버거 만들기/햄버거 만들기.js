function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        const a = ingredient[i];
        const b = stack[stack.length - 1];
        const c = stack[stack.length - 2];
        const d = stack[stack.length - 3];
        if(a === 1 && b === 3 && c === 2 && d === 1) {
            stack.pop();
            stack.pop();
            stack.pop();
            answer++;
        } else {
            stack.push(a);
        }
    }
    
    return answer;
}