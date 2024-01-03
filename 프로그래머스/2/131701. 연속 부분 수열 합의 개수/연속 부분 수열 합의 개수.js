function solution(elements) {
    let length = 2;
    const set = new Set(elements);
    
    while(length < elements.length + 1) {
        elements.forEach((element, index) => {
            let sum = element;
            for(let i = 1; i < length; i++) {
                let nextIndex = index + i;
                if(nextIndex >= elements.length) {
                    nextIndex -= elements.length;
                }
                sum += elements[nextIndex];
            }
            set.add(sum);
        });
        length++;
    }
    
    return set.size;
}