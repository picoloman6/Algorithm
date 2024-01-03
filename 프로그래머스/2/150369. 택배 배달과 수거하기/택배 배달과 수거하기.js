function deduction(cap, multiply, arr) {
    if(multiply > 0) {
        cap *= multiply;
    }

    for(let i = arr.length - 1; i > -1; i--) {
        if(cap === 0) {
            break;
        }
            
        if(arr[i] >= cap) {
            arr[i] -= cap;
            cap = 0;
        } else {
            cap -= arr[i];
            arr[i] = 0;
        }    
        
    }
}

function solution(cap, n, deliveries, pickups) {
    let multiply = 0;
    let answer = 0;
    
    while(deliveries.length > 0) {
        let maxDelivery = deliveries[deliveries.length - 1];
        let maxPickup = pickups[pickups.length - 1];
        
        if(maxDelivery === 0 && maxPickup === 0) {
            break;
        }
        
        
        if(maxDelivery > maxPickup) {
            multiply = parseInt(maxDelivery / cap);
            answer += multiply < 2 ?
                deliveries.length * 2 : deliveries.length * multiply * 2;
        } else {
            multiply = parseInt(maxPickup / cap);
            answer += multiply < 2 ?
                pickups.length * 2 : pickups.length * multiply * 2;
        }
        
        deduction(cap, multiply, deliveries);
        deduction(cap, multiply, pickups);

        while(deliveries[deliveries.length - 1] === 0 
              && pickups[pickups.length - 1] === 0) {
            deliveries.pop();
            pickups.pop();
        }
    }
    
    return answer;
}