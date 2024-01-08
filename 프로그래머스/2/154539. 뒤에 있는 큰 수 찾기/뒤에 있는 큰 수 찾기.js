function solution(numbers) {
    const answer  = Array.from({ length : numbers.length }, () => -1);
    const stack1 = [];
    const stack2 = [];
    
    
    for(let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if(stack1.length === 0 || stack1[stack1.length - 1] >= num) {
            stack1.push(num);
            stack2.push(i);
        } else {
            while(stack1.length !== 0 && stack1[stack1.length - 1] < num) {
                const idx = stack2.pop();
                stack1.pop();
                answer[idx] = num;
            }
            stack1.push(num);
            stack2.push(i);
        }
    }
    
    return answer;    
}