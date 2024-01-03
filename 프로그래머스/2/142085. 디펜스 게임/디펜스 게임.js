class Heap {
    constructor() {
        this.heap = [null];
    }
    
    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        let parentIdx = parseInt(idx / 2);
        while(parentIdx > 0 && this.heap[idx] > this.heap[parentIdx]) {
            const parent = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[idx];
            this.heap[idx] = parent;
            idx = parentIdx;
            parentIdx = parseInt(idx / 2);
        }
    }
    
    pop() {
        if(this.heap.length === 1) {
            return;
        }
        
        if(this.heap.length === 2) {
            return this.heap.pop();
        }
        
        const returnedValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let idx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        while(this.heap[idx] < this.heap[leftIdx] ||
             this.heap[idx] < this.heap[rightIdx]) {
            if(this.heap[leftIdx] < this.heap[rightIdx]) {
                const value = this.heap[rightIdx];
                this.heap[rightIdx] = this.heap[idx];
                this.heap[idx] = value;
                idx = rightIdx;
            } else {
                const value = this.heap[leftIdx];
                this.heap[leftIdx] = this.heap[idx];
                this.heap[idx] = value;
                idx = leftIdx;
            }
            leftIdx = idx * 2;
            rightIdx = idx * 2 + 1;
        }
        return returnedValue;
    }
}


function solution(n, k, enemy) {
    const heap = new Heap();
    let answer = 0;
    let sum = 0;
    
    for(let value of enemy) {
        if(sum + value > n && k === 0) {
            break;
        }
        
        heap.push(value);
        sum += value;
        answer++;
        
        if(sum > n && k > 0) {
            k--;
            sum -= heap.pop();
        }
    }
    
    return answer;
}