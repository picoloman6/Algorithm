function solution(enroll, referral, seller, amount) {
    const n = enroll.length;
    const people = {};
    const result = [];
    
    for(let i = 0; i < n; i++) {
        const person = enroll[i];
        const parent = referral[i];
        
        people[person] = { revenue : 0, parent : '' }
        if(parent !== '-') {
            people[person]['parent'] = parent;
        }
    }
    
    for(let i = 0; i < seller.length; i++) {
        let person = seller[i];
        let revenue = amount[i] * 100;
            
        while(person !== '' && revenue > 0) {
            const parent = people[person]['parent'];
            people[person]['revenue'] += Math.ceil(revenue * 0.9);
            revenue = Math.floor(revenue * 0.1);
            person = parent;
        }
    }
    
    for(const person of enroll) {
        result.push(people[person]['revenue']);
    }
            
    return result;
}