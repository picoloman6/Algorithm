function convertor(query) {
    const [sx, sy, ex, ey] = query;
    const coords = [];
    
    for(let i = sy; i <= ey; i++) {
        coords.push([sx - 1, i - 1]);
    }
    
    for(let i = sx + 1; i <= ex; i++) {
        coords.push([i - 1, ey - 1]);
    }
    
    for(let i = ey - 1; i >= sy; i--) {
        coords.push([ex - 1, i - 1]);
    }
    
    for(let i = ex - 1; i > sx; i--) {
        coords.push([i - 1, sy - 1]);
    }
    
    return coords;
}

function changer(maps, coords) {  
    const start = coords[0];
    const nums = [];

    for(const [x, y] of coords) {
        const cur = maps[x][y];
        nums.push(cur);
    }
    
    maps[start[0]][start[1]] = nums[nums.length - 1];
    
    for(let i = 1; i < coords.length; i++) {
        const cur = coords[i];
        maps[cur[0]][cur[1]] = nums[i - 1];
    }
    
    return Math.min(...nums);
}

function solution(rows, columns, queries) {
    const answer = [];
    const maps = [];
    
    for(let i = 0; i < rows; i++) {
        const tmp = [];
        for(let j = 1; j <= columns; j++) {
            tmp.push(j + columns * i);
        }
        maps.push(tmp);
    }
    
    queries.forEach((v) => {
        const coords = convertor(v);
        const min = changer(maps, coords);
        answer.push(min);
    })
    
    return answer;
}