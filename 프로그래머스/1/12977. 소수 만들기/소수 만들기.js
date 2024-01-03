function solution(nums) {
    let answer = 0;
    const numbers = [];
    
    function dfs(L, start, sum) {
        if(L === 3) {
            numbers.push(sum);
        } else {
            for(let i = start; i < nums.length; i++) {
                dfs(L + 1, i + 1, sum + nums[i]);
            }
        }
    }
    
    function gotPrimes(number) {
        const primes = [false, false, ...Array(number - 1).fill(true)];
        
        for(let i = 2; i * i <= number; i++) {
            if(primes[i]) {
                for(let j = i * 2; j <= number; j+=i) {
                    primes[j] = false;
                }
            }
        }
        
        return primes;
    }
        
    dfs(0, 0, 0);
    numbers.sort((prev, next) => next - prev);
    const primes = gotPrimes(numbers[0])
    numbers.forEach((value) => {
        primes[value] ? answer++ : '';
    })
    
    return answer;
    
}