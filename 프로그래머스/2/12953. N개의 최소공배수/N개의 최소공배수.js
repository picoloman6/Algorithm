function solution(arr) {
    arr.sort((a, b) => a - b);
    let answer = arr[arr.length - 1] + 1;
    
    while(true) {
        let cnt = 0;
        for(const num of arr) {
            if(answer % num === 0) {
                cnt++;
            } else {
                answer++;
                break;
            }
        }
        if(cnt === arr.length) {
            break;
        }
    }
    
    return answer;
}