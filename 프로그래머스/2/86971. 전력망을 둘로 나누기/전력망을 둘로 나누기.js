function findPath(myMap) {
    const queue = [];
    const set = new Set();
    
    for(let i = 0; i < myMap.length; i++) {
        for(let j = 0; j < myMap.length; j++) {
            if(myMap[i][j] === true) {
                queue.push(j);
                set.add(i);
            }
        }
        if(set.size > 0) {
            break;
        }
    }
    
    while(queue.length > 0) {
        const idx = queue.shift();
        set.add(idx);
        for(let i = 0; i < myMap.length; i++) {
            if(myMap[idx][i] && !set.has(i)) {
                queue.push(i);
            }
        }
    }
    
    return Math.abs(set.size * 2 - myMap.length);
}


function solution(n, wires) {
    let answer = Infinity;
    const myMap = Array.from({ length : n }, () => Array.from({
        length : n }, () => false)); 
    
    wires.forEach((wire) => {
        const [x, y] = wire;
        myMap[x - 1][y - 1] = true;
        myMap[y - 1][x - 1] = true;
    });
    
    wires.forEach((wire) => {
        let tmp = 0;
        const [x, y] = wire;
        
        myMap[x - 1][y - 1] = false;
        myMap[y - 1][x - 1] = false;
        
        tmp = findPath(myMap);
        
        if(tmp < answer) {
            answer = tmp;
        }
        
        myMap[x - 1][y - 1] = true;
        myMap[y - 1][x - 1] = true;
    });
    
    return answer;    
}