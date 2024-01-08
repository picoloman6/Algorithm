function solution(x, y, n) {
    const arr = Array.from({ length : y + 1 }, () => Infinity);
    
    for(let i = 0; i <= x; i++) {
        arr[i] = 0;
    }
    
    for(let i = x; i < y; i++) {
        if(i + n <= y) {
            arr[i + n] = Math.min(arr[i] + 1, arr[i + n]);
        }
        
        if(i * 2 <= y) {
            arr[i * 2] = Math.min(arr[i] + 1, arr[i * 2]);
        }
        
        if(i * 3 <= y) {
            arr[i * 3] = Math.min(arr[i] + 1, arr[i * 3]);
        }
    }
    
    return arr[y] === Infinity ? -1 : arr[y];
}