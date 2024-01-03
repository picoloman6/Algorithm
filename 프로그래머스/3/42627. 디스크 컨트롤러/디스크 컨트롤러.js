class Heap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        let parentIdx = Math.floor(idx / 2);
        while(parentIdx > 0 && this.compare(idx, parentIdx)) {
            const parent = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[idx];
            this.heap[idx] = parent;
            idx = parentIdx;
            parentIdx = Math.floor(idx / 2);
        }
    }
    
    pop() {
        if(this.getLength() === 1) {
            return;
        }
        
        if(this.getLength() === 2) {
            return this.heap.pop();
        }
        
        const returnedValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let idx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        if(this.getLength() > 2) {
            while(this.heap[leftIdx] && this.compare(leftIdx, idx) || 
                 this.heap[rightIdx] && this.compare(rightIdx, idx)) {
                if(this.heap[rightIdx] && this.compare(rightIdx, leftIdx)) {
                    const value = this.heap[idx];
                    this.heap[idx] = this.heap[rightIdx];
                    this.heap[rightIdx] = value;
                    idx = rightIdx;
                } else {
                    const value = this.heap[idx];
                    this.heap[idx] = this.heap[leftIdx];
                    this.heap[leftIdx] = value;
                    idx = leftIdx;
                }
                leftIdx = idx * 2;
                rightIdx = idx * 2 + 1;
            }
        }
        return returnedValue;
    }
    
    compare(idx1, idx2) {
        if(this.heap[idx1][1] < this.heap[idx2][1]) {
            return true;
        }
        return false;
    }
    
    getLength() {
        return this.heap.length;
    }
}


function solution(jobs) {
    let time = 0;
    let idx = 0;
    const finish = [];
    const heap = new Heap();
    
    jobs.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    while(idx < jobs.length || heap.getLength() > 1) {
        while(idx < jobs.length && heap.getLength() === 1 && jobs[idx][0] >= time) {
            if(time < jobs[idx][0]) {
                time = jobs[idx][0] + jobs[idx][1];
                finish.push(jobs[idx][1]);
            } else {
                time += jobs[idx][1];
                finish.push(time - jobs[idx][0]);
            }
            
            idx++;
        }
        
        while(idx < jobs.length && jobs[idx][0] <= time) {
            heap.push(jobs[idx]);
            idx++;
        }
        
        while(heap.getLength() > 1) {
            const value = heap.pop();
            time += value[1];
            finish.push(time - value[0]);
            while(idx < jobs.length && jobs[idx][0] <= time) {
                heap.push(jobs[idx]);
                idx++;
            }
        }
    }

    return parseInt(finish.reduce((a, b) => a + b, 0) / finish.length);
}