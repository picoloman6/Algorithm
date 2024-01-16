function calculator(arr) {
    const sum = [];
    let max = -Infinity;
    let min = Infinity;
    let idx = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum[i] = arr[i] + (sum[i - 1] || 0);
    }
    
    for(let i = 0; i < sum.length; i++) {
        if(max < sum[i]) {
            max = sum[i];
            idx = i;
        }
    }
    
    for(let i = 0; i < idx; i++) {
        min = Math.min(min, sum[i]);
    }
        
    if(min < 0) {
        return max - min;
    } else {
        return max;
    }
}

function solution(sequence) {
    const answer = [];
    const arr1 = [];
    const arr2 = [];
    
    for(let i = 0; i < sequence.length; i++) {
        if(i % 2 === 0) {
            arr1.push(sequence[i]);
        } else {
            arr1.push(sequence[i] * -1);
        }
    }
    
    for(let i = 0; i < sequence.length; i++) {
        if(i % 2 === 1) {
            arr2.push(sequence[i]);
        } else {
            arr2.push(sequence[i] * -1);
        }
    }
    
    answer.push(calculator(arr1));
    answer.push(calculator(arr2));
    
    return Math.max(...answer);
}