function solution(park, routes) {
    const n = park.length;
    const m = park[0].length;
    const current = [];
    
    outer:for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(park[i][j] === 'S') {
                current[0] = i;
                current[1] = j;
                break outer;
            }
        }
    }
    
    routes.forEach((v) => {
        const [dir, dist] = v.split(' ');
        let flag = true;
        let nx = current[0];
        let ny = current[1];
        
        for(let i = 0; i < dist * 1; i++) {
            if(dir === 'E') {
                ny++
            } else if(dir === 'W') {
                ny--;
            } else if(dir === "S") {
                nx++;
            } else {
                nx--;
            }
            
            if(0 > nx || nx >= n || 0 > ny || ny >= m || park[nx][ny] === 'X') {
                flag= false;
                break;
            }
        }
        
        if(flag) {
            current[0] = nx;
            current[1] = ny;
        }
    });
    
    return current;
}