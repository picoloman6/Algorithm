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

const solution = function(n, roads, sources, destination) {
    const answer = [];
    const queue = new Queue();
    const graph = Array(n + 1);
    const dist = Array.from({ length : n + 1 }, () => 100001);
    
    dist[destination] = 0;
    for(let[src, dest] of roads) {
        if(!graph[src]) {
            graph[src] = [];
        }
        
        if(!graph[dest]) {
            graph[dest] = [];
        }
        
        graph[src].push(dest);
        graph[dest].push(src);
    }
    
    for(let dest of graph[destination]) {
        queue.enqueue({ dest, dist : 1 });
        dist[dest] = 1;
    }
    
    while(queue.size > 0) {
        const value = queue.dequeue();
        if(graph[value.dest]) {
            for(let dest of graph[value.dest]) {
                if(dist[dest] === 100001) {
                    queue.enqueue({ dest, dist : value.dist + 1 });
                    dist[dest] = value.dist + 1;
                }
            }
        }
    }
    
    for(let source of sources) {
        if(dist[source] === 100001) {
            answer.push(-1);
        } else {
            answer.push(dist[source]);
        }
    }
        
    return answer;
}