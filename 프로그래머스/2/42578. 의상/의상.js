// function dfs(arr, answers, L, s, count, total) {
//     if(L === count) {
//         answers.push(total);
//         return;
//     } else {
//         for(let i = s; i < arr.length; i++) {
//             const value = total === 0 ? arr[i] : total * arr[i];
//             dfs(arr, answers, L, i + 1, count + 1, total);
//         }
//     }
// }

// function solution(clothes) {
//     const answers = [];
//     const obj = {};
//     clothes.forEach((cloth) => {
//         obj[cloth[1]] ? obj[cloth[1]]++ : obj[cloth[1]] = 1;
//     });
//     const arr = Object.values(obj);
        
//     for(let i = 0; i < arr.length; i++) {
//         dfs(arr, answers, i + 1, 0, 0, 0);
//     }
        
//     return answers.reduce((prev, next) => prev + next, 0);
// }

function solution(clothes) {
    let answer = 1;
    const obj = {};
    clothes.forEach((cloth) => {
        obj[cloth[1]] ? obj[cloth[1]]++ : obj[cloth[1]] = 1;
    });
    for(let value of Object.values(obj)) {
        answer *= (value + 1);
    }
    
    return answer - 1;
}