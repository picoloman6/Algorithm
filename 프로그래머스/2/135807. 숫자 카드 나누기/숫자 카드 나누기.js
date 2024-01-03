function findMaxDivisor(arr1, arr2) {
    const min = arr1.sort((prev, next) => prev - next)[0];
    for(let i = min; i > 1; i--) {
        let count = 0;
        for(let j = 0; j < arr1.length; j++) {
            if(arr1[j] % i !== 0) {
                break;
            }
            
            if(arr2[j] % i === 0) {
                break;
            }
            
            count++;
        }
        if(count === arr1.length) {
            return i;
        }
    }
    return 0;
}

function solution(arrayA, arrayB) {
    const num1 = findMaxDivisor(arrayA, arrayB);
    const num2 = findMaxDivisor(arrayB, arrayA);
    
    return num1 > num2 ? num1 : num2;
}