class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    enqueue(value) {
        const node = new Node(value);
        if(this.front === null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }
    
    dequeue() {
        if(this.size === 0) {
            return;
        }
        
        const value = this.front.value;
                
        if(this.size === 1) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        
        this.size--;
        return value;
    }
}

function bfs(maps, x, y, end) {
    const n1 = maps.length;
    const n2 = maps[0].length;
    const queue = new Queue();
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const check = Array.from({ length : n1 }, () => Array(n2).fill(false));
    queue.enqueue({ x, y, count : 0 });
    
    while(queue.size > 0) {
        const value = queue.dequeue();
        
        if(value.x === end[0] && value.y === end[1]) {
            return value.count;
        }
        
        for(let [dx, dy] of dirs) {
            const nx = value.x + dx;
            const ny = value.y + dy;
            if(nx < 0 || nx > n1 - 1 || ny < 0 || ny > n2 - 1) {
                continue;
            }
            
            if(maps[nx][ny] === 'X' || check[nx][ny] === true) {
                continue;
            }
            check[nx][ny] = true;
            queue.enqueue({ x : nx, y : ny, count : value.count + 1 });
        }        
    }
    
    return -1;
}

function solution(maps) {
    const start = [];
    const lever = [];
    const end = [];
    
    for(let i = 0; i < maps.length; i++) {
        if(start.length > 0 && lever.length > 0 && end.length > 0) {
            break;
        }
        
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === 'S') {
                start.push(i, j);
            } else if(maps[i][j] === 'L') {
                lever.push(i, j);
            } else if(maps[i][j] === 'E') {
                end.push(i, j);
            }
        }
    }
    
    const a = bfs(maps, start[0], start[1], lever);
    const b = bfs(maps, lever[0], lever[1], end);
    
    return a === -1 ? -1 : b === -1 ? -1 : a + b;
}