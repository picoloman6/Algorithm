function dfs(L, operators, check, arr, numbers, answers) {
    if(L === operators.length) {
        let tmp1 = [...numbers];
        let tmp2 = [];
        for(let op of arr) {
            for(let i = 0; i < tmp1.length; i++) {
                if(tmp1[i] === op) {
                    if(op === '-') {
                        tmp2[tmp2.length - 1] -= tmp1[i + 1];
                        i++;
                    } else if(op === '*') {
                        tmp2[tmp2.length - 1] *= tmp1[i + 1];
                        i++;
                    } else if(op === '+') {
                        tmp2[tmp2.length - 1] += tmp1[i + 1];
                        i++;
                    }
                } else {
                    tmp2.push(tmp1[i]);
                }
            }
            tmp1 = tmp2;
            tmp2 = [];
        }
        answers.push(Math.abs(tmp1[0]));
        return;
    } else {
        for(let i = 0; i < operators.length; i++) {
            if(check[i] === 0) {
                check[i] = 1;
                arr[L] = operators[i];
                dfs(L + 1, operators, check, arr, numbers, answers);
                check[i] = 0;
            }
            
        }
    }
}

function solution(expression) {
    const numbers = [];
    const answers = [];
    const operators = new Set();
    
    let number = '';
    for(let char of expression) {
        if(Number.isInteger(char * 1)) {
            number += char;
        } else {
            numbers.push(number * 1);
            numbers.push(char);
            operators.add(char);
            number = '';
        }
    }
    
    numbers.push(number * 1);
    
    dfs(0, [...operators], Array.from({length : operators.size}, () => 0), [], numbers, answers);
    
    return answers.reduce((prev, next) => next > prev ? next : prev, 0);
}