function dfs(L, result, emoticons, users, rates) {
    if(rates.length === L) {
        const tmp = makeSum(emoticons, users, rates);
        if(tmp[0] > result[0]) {
            result[0] = tmp[0];
            result[1] = tmp[1];
        } else if (tmp[0] === result[0] && tmp[1] > result[1]) {
            result[0] = tmp[0];
            result[1] = tmp[1];
        }
        return;
    } else {
        for(let i = 10; i <= 40; i+=10) {
            dfs(L, result, emoticons, users, [...rates, i]);
        }
    }
}

function makeSum(emoticons, users, rates) {
    const tmp = [0, 0];
    for(let user of users) {
        let sum = 0;
        for(let i = 0; i < emoticons.length; i++) {
            if(rates[i] >= user[0]) {
                sum += emoticons[i] * (1 - rates[i] / 100);
            } 
        }
        if(sum >= user[1]) {
            tmp[0]++;
        } else {
            tmp[1] += sum;
        }
    }
    return tmp;
}

function solution(users, emoticons) {
    const result = [0, 0];
    dfs(emoticons.length, result, emoticons, users, []);
    return result;
}