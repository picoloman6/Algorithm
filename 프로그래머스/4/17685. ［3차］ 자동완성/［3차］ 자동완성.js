class Node {
    constructor(value = '', count = 0) {
        this.value = value;
        this.count = count;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    
    insert(word) {
        let current = this.root;
        for(let char of word) {
            if(!current.children.has(char)) {
                const node = new Node(current.value + char, 1);
                current.children.set(char, node);
            } else {
                current.children.get(char).count++;
            }
            current = current.children.get(char);
        }
    }
    
    find(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            current = current.children.get(word[i]);
            if(current.count === 1) {
                return i + 1;
            }
        }
        return word.length;
    }
}

function solution(words) {
    let answer = 0;
    const trie = new Trie();
    
    for(let word of words) {
        trie.insert(word);
    }
    
    for(let word of words) {
        answer += trie.find(word);
    }
    
    return answer;
}