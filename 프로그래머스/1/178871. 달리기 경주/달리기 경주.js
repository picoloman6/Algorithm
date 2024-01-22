function solution(players, callings) {
    const obj = {};
    
    for(let i = 0; i < players.length; i++) {
        const key = players[i];
        obj[key] = i;
    }
    
    for(const calling of callings) {
        const idx = obj[calling];
        const value = players[idx - 1];
        
        players[idx - 1] = calling;
        players[idx] = value;
        
        obj[calling] = idx - 1;
        obj[value] = idx;
    }
    
    return players;
}