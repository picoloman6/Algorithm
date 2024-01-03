function solution(n, k) {
    const nums = n.toString(k).split('0').filter((value) => value !== '').map((value) => value * 1).sort((prev, next) => next - prev);
    let answer = 0;
    
    function getPrimes(num) {
        if(num <= 1) {
            return false;
        }
        
        for(let i = 2; i * i <= num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    nums.forEach((num) => {
        getPrimes(num) ? answer++ : '';
    })
            
    return answer;
}