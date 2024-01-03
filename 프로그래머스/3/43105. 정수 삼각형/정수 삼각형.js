function solution(triangle) {
    let answer = 0;
    const arr = JSON.parse(JSON.stringify(triangle));
    
    if(arr.length === 1) {
        return arr[0][0];
    }
    
    arr[1][0] += arr[0][0];
    arr[1][1] += arr[0][0];
    
    if(arr.length === 2) {
        return Math.max(...arr[1]);
    }
    
    for(let i = 2; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j === 0) {
                arr[i][j] += arr[i-1][j];
            } else if(j === arr[i].length - 1) {
                arr[i][j] += arr[i-1][j-1]
            } else {
                const sum = Math.max(arr[i-1][j-1], arr[i-1][j]);
                arr[i][j] += sum;
            }
        }
    }
    
    for(let i = 0; i < arr[arr.length - 1].length; i++) {
        if(arr[arr.length - 1][i] > answer) {
            answer = arr[arr.length - 1][i];
        }
    }
    
    return answer;
}