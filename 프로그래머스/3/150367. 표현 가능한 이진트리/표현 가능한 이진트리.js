function getFullBinary(n) {
    const binary = n.toString(2);
    const len = binary.length;
    let node = 1;
    let level = 1;
    
    while (len > node) {
        level *= 2;
        node += level;
    }
    
    let newBinary = binary;
    
    for(let i = 0; i < node - len; i++) {
        newBinary = `0${newBinary}`;
    }
    
    return newBinary;
}

function isZero(b) { 
    if(b.length === 1) {
        if(b[0] === '0') {
            return true;
        } else {
            return false;
        }
    }
    
    const mid = Math.floor(b.length / 2);
    
    if(b[mid] === '0') {
        const l = isZero(b.slice(0, mid))
        const r = isZero(b.slice(mid + 1));
        
        return l && r;
    }
    
    return false;
}

function isValid(b) {
    if(b.length === 1) {
        return true;
    }
            
    const mid = Math.floor(b.length / 2);
    
    if(b[mid] === '1') {
        const l = isValid(b.slice(0, mid))
        const r = isValid(b.slice(mid + 1));
                
        return l && r;
    }
    
    return isZero(b.slice(0, mid)) && isZero(b.slice(mid + 1));
}

function solution(numbers) {
    const answer = Array(numbers.length).fill(0);
    
    for(let i = 0; i < numbers.length; i++) {
        const b = getFullBinary(numbers[i].toString(2));
                
        if(isValid(b)) {
            answer[i] = 1;
        }
    }
        
    return answer;
}