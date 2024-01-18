function solution(a) {
    const check = Array.from({ length : a.length }, () => false);
    let left = Infinity;
    let right = Infinity;

    for(let i = 0; i < a.length; i++) {        
        if(a[i] < left) {
            left = a[i];
            check[i] = true;
        } 
        
        if(a[a.length - 1 - i] < right) {
            right = a[a.length - 1 - i];
            check[a.length - 1 - i] = true;
        }
    }
    
    return check.reduce((acc, cur) => cur ? acc + 1 : acc, 0);
}