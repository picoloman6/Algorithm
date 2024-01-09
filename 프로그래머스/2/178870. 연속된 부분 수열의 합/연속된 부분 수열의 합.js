function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const answer = [];
    
    while(right < sequence.length) {
        if(sum <= k) {
            sum === k && answer.push([left, right]);
            right++;
            sum += sequence[right];
        } else if(sum > k) {
            sum -= sequence[left];
            left++;
        }
    }
    
    answer.sort((a, b) => {
        if((a[1] - a[0]) === (b[1] - b[0])) {
            return a[0] - b[0];
        } else {
            return (a[1] - a[0]) - (b[1] - b[0])
        }
    });
    
    return answer[0];
}