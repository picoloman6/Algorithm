function solution(s){
    const stack = [];
    
    for(char of s) {
        if(char === '(') {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return false
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

// function solution(s){
//     let count = 0;
    
//     for(char of s) {
//         if(char === '(') {
//             count++;
//         } else {
//             if(count === 0) {
//                 return false;
//             } else {
//                 count--;
//             }
//         }
//     }
    
//     return count === 0;
// }