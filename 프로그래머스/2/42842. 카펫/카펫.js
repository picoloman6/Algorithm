function solution(brown, yellow) {    
    for(let i = 1; i <= Math.floor(yellow); i++) {
        if(yellow % i !== 0) {
            continue;
        }
        
        const width = yellow / i;
        
        if(i * 2 + width * 2 + 4 === brown) {
            return[width + 2, i + 2];
        }
    }
}