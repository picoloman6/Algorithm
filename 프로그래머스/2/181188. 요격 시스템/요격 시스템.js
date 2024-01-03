// 최소한의 그룹 만들기

const solution = function(targets) {
    let idx = 0;
    const arr = [...targets].sort((a, b) => a[0] - b[0]);
    const groups = [arr[0]];
    
    for(let i = 1; i < arr.length; i++) {
        const [s1, e1] = arr[i];
        const [s2, e2] = groups[idx];
        if(s1 < e2 && s1 >= s2) {
            groups[idx] = [Math.min(s1, s2), Math.min(e1, e2)];
        } else {
            idx++;
            groups.push(arr[i]);
        }
    }
        
    return groups.length;
}