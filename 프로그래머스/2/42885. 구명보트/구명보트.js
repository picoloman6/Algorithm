function solution(people, limit) {
    const sortedPeople = people.sort((prev, next) => prev - next);
    let answer = 0;
    let left = 0;
    let right = sortedPeople.length - 1;
    
    while(left <= right) {
        const sum = sortedPeople[left] + sortedPeople[right];
        if(sum <= limit) {
            answer++;
            left++;
            right--;
        } else if(sum > limit) {
            answer++;
            right--;
        }
    }
    
    return answer;
}