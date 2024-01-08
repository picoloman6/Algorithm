function solution(word) {
    let num = '';
    let answer = 0;
    const arr = [];
    
    for(const letter of word) {
        if(letter === 'A') {
            num += '1';
        } else if(letter === 'E') {
            num += '2';
        } else if(letter === 'I') {
            num += '3';
        } else if(letter === 'O') {
            num += '4';
        } else {
            num += '5';
        }
    }
    
    while(arr.join('') !== num) {
        if(arr.length  < 5) {
            arr.push(1);
        } else {
            while(arr[arr.length - 1] === 5) {
                arr.pop();
            }
            arr[arr.length - 1]++;
        }
        answer++;
    }
    
    return answer;
}