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
        };
        
        const value = this.front.value;
        
        if(this.size === 1) {
            this.front = null;
            this.rear = null;
        } else if(this.size > 1) {
            this.front = this.front.next;
        }
        
        this.size--;
        return value;        
    }
}


function solution(n, edge) {
    const queue = new Queue();
    const dist = Array(n + 1).fill(0);
    const check = Array(n + 1).fill(0);
    
    queue.enqueue(1);
    check[1] = 1;
    while(queue.size > 0) {
        const current = queue.dequeue();
        for(let [src, dest] of edge) {
            if(current === src && check[dest] === 0) {
                check[dest] = 1
                dist[dest] = dist[current] + 1;
                queue.enqueue(dest);
            } else if(current === dest && check[src] === 0) {
                check[src] = 1;
                dist[src] = dist[current] + 1;
                queue.enqueue(src);
            }
        }
    }
    
    const max = Math.max(...dist);
    return dist.filter((value) => value === max).length;
}