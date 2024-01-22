function solution(coin, cards) {
    let answer = 0;
    let chance = 0;
    let secondChance = 0;
    let progress = true;
    const n = cards.length;
    const check = Array.from({ length : n + 1 }, () => 0);
    
    for(let i = 0; i < n / 3; i++) {
        const card = cards[i];
        const opp = n + 1 - card;
        check[opp] === 1 && chance++;
        check[card] = 1;
    }
    
    let idx = n / 3;
    while(progress && idx <= n) {
        answer++;
        progress = false;
        for(let i = idx; i <= Math.min(idx + 1, n - 1); i++) {
            const card = cards[i];
            const opp = n + 1 - card;
                        
            if(check[opp] === 1) {
                if(coin > 0) {
                    chance++;
                    coin--;
                }
                check[card] = 1
            } else if(check[opp] === 2) {
                secondChance++;
                check[card] = 2;
            } else {
                check[card] = 2;
            }
        }
        
        
        if(chance > 0) {
            chance--;
            progress = true;
        } else if(secondChance > 0 && coin > 1) {
            secondChance--;
            coin -= 2;
            progress = true;
        }
        
        idx += 2;
    }
            
    return answer;
}