function solution(n) {
    let answer = 0;
    const arr = n.toString(3).split('').map(Number);
        
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i] * (3 ** i);
    }
    
    return answer;
}