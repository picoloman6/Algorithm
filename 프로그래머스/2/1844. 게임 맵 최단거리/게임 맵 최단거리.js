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

function solution(maps) {
    let answer = -1;
    const lenX = maps.length;
    const lenY = maps[0].length;
    const queue = new Queue();
    const dir = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    
    queue.enqueue([0, 0, 1]);
    
    while(queue.size > 0) {
        const [x, y, count] = queue.dequeue();
        
        if(x === lenX - 1 && y === lenY -1) {
            return count;
        }
        
        if(maps[x][y]){
        maps[x][y] = 0;
        for(let [dx, dy] of dir) {
            const nx = x + dx;
            const ny = y + dy;
            if(nx >= 0 && nx < lenX && ny >= 0 && ny < lenY) {
                if(maps[nx][ny] === 1) {
                    
                    queue.enqueue([nx, ny, count + 1]);
                }
            }
        }}
    }
        
    return answer;
}