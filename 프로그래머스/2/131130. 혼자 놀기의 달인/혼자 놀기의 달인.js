function solution(cards) {
    const check = Array.from({ length : cards.length }, () => false);
    const box = [];
    let tmp = [];
    let idx = 0;
    
    while(check.includes(false)) {
        if(check[idx] === false) {
            check[idx] = true;
            tmp.push(cards[idx]);
            idx = cards[idx] - 1;
        } else {
            box.push(tmp);
            tmp = [];
            idx = check.findIndex((value) => value === false);
        }
    }
    
    if(tmp.length > 0) {
        box.push(tmp);
    }
    
    box.sort((a, b) => b.length - a.length);
    
    return box.length === 1 ? 0 : box[0].length * box[1].length;
}