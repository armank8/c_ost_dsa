class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    push(value) {
        this.top++;
        this.data[this.top] = value;
        return this.data[this.top];
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Empty")
            return null;
        }
        let poppedValue = this.data[this.top];
        this.data[this.top] = undefined;
        this.top--;
        return poppedValue;
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Empty")
            return null;
        }
        return this.data[this.top];
    }
    isEmpty() {
        return this.top === -1
    }

    getSize() {
        return this.top + 1;
    }
    clear() {
        this.data = [];
        this.top = -1;
    }
}

let s1 = new Stack();
console.log(s1);

console.log(s1.push(3));
console.log(s1.push(4));
console.log(s1.push(5));
console.log(s1);

console.log(s1.pop());
console.log(s1.peek());
console.log(s1);
console.log(s1.getSize());
// console.log(s1.clear());

console.log(s1);
