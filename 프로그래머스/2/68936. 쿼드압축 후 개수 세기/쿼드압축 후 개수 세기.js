function divider(answer, arr, x, y, mid) {
    const start = arr[x][y];
    const newMid = mid / 2;
    for(let i = x; i < x + mid; i++) {
        for(let j = y; j < y + mid; j++) {
            if(start !== arr[i][j]) {              
                divider(answer, arr, x, y, newMid);
                divider(answer, arr, x + newMid, y, newMid);
                divider(answer, arr, x, y + newMid, newMid);
                divider(answer, arr, x + newMid, y + newMid, newMid);
                return;
            }
        }
    }
    answer[start]++;    
}


function solution(arr) {
    const answer = [0, 0];
    const mid = arr.length;
    
    divider(answer, arr, 0, 0, mid);
    
    return answer;
}