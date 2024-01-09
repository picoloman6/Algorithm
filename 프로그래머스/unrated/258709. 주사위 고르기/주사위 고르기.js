function sumDfs(dice, sumArr, L, sum) {
    if(L === dice.length) {
        sumArr.push(sum);
        return;
    } else {
        for(const num of dice[L]) {
            sumDfs(dice, sumArr, L + 1, sum + num);
        }
    }
}

function battle(sum1, sum2) {
    let win1 = 0;
    let win2 = 0;
    
    for(let num of sum1) {
        let left = 0;
        let right = sum2.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if(num > sum2[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        win1 += left;
    }
    
    for(let num of sum2) {
        let left = 0;
        let right = sum1.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if(num > sum1[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        win2 += left;
    }
        
    return [win1, win2];
}

function getDfs(dice, start, L, selection, answer) {
    if(L === dice.length / 2){
        const selection2 = [];
        const dice1 = [];
        const dice2 = [];
        
        const sum1 = [];
        const sum2 = [];
        
        for(let i = 0; i < dice.length; i++) {
            if(selection.includes(i)) {
                dice1.push(dice[i]);
            } else {
                dice2.push(dice[i]);
                selection2.push(i + 1);
            }
        }
              
        sumDfs(dice1, sum1, 0, 0);
        sumDfs(dice2, sum2, 0, 0);
        
        sum1.sort((a, b) => a - b);
        sum2.sort((a, b) => a - b);
        
        const [win1, win2] = battle(sum1, sum2);
                
        if(win1 > win2 && win1 > answer[0]) {
            answer[0] = win1;
            answer[1] = selection.map((v) => v + 1);
        } else if(win2 > win1 && win2 > answer[0]) {
            answer[0] = win2;
            answer[1] = selection2;
        }

        return;
    } else {
        for(let i = start; i < dice.length; i++) {
            selection[L] = i;
            getDfs(dice, i + 1, L + 1, selection, answer);
        }
    }
}

function solution(dice) {   
    // dice = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1],[1, 1, 1, 1, 1],[1, 1, 1, 1, 1],[1, 1, 1, 1, 1],[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2]]
    const answer = [0, []];
    
    getDfs(dice, 1, 1, [0], answer);
    
    return answer[1];
}