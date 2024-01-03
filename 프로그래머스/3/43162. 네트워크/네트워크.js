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

function solution(n, computers) {
    let answer = 0;
    const queue = new Queue();
    const check = Array.from({ length : n }, () => 0);
    
    for(let i = 0; i < computers.length; i++) {
        if(check[i]) continue;
        queue.enqueue(i);
        check[i] = 1;
        while(queue.size > 0) {
            const src = queue.dequeue();
            for(let j = 0; j < computers[src].length; j++) {
                if(check[j] === 0 && computers[src][j] === 1) {
                    queue.enqueue(j);
                    check[j] = 1;
                }
            }
        }
        answer++;
    }
    return answer;
}