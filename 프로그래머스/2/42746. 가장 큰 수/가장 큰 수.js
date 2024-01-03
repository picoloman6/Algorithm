function solution(numbers) {
    const sortedNumbers = numbers.sort((prev, next) => {
        const first = String(prev) + String(next);
        const second = String(next) + String(prev);
        if(first * 1 > second * 1) {
            return -1;
        } else {
            return 1;
        }
    });
    
    if(sortedNumbers.join('') * 1 === 0) {
        return '0';
    } else {
        return sortedNumbers.join('');
    }
}