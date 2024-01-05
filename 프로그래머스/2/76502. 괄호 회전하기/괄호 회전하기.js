function solution(s) {
    let answer = 0;
    const str = s.split('');
    
    for(let j = 0; j < str.length; j++) {
        const stack = [];
        for(let i = 0; i < str.length; i++) {
            const letter = str[i];
            const len = stack.length - 1;
            if(letter === '[' || letter === '{' || letter === '(') {
                stack.push(letter);
            } else {
                if (letter === ']' && stack[len] === '[') {
                    stack.pop();
                } else if(letter === '}' && stack[len] === '{') {
                    stack.pop();
                } else if(letter === ')' && stack[len] === '(') {
                    stack.pop();
                } else {
                    stack.push(letter);
                }
            }
        }
        
        stack.length === 0 && answer++;
        str.push(str.shift());
    }
    
    
    
    return answer;
}