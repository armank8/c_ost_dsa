class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        this.items[this.rear] = val;
        this.rear++;
        return this.items[this.rear-1];
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const dequeuedValue = this.items[this.front];
        this.items[this.front] = undefined;
        this.front++;

        return dequeuedValue;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    getSize() {
        return this.rear - this.front;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }
}

const q1 = new Queue();
console.log(q1);
console.log(q1.enqueue(1));
console.log(q1.enqueue(2));
console.log(q1.enqueue(3));
console.log(q1.enqueue(4));
console.log(q1);
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.enqueue(5));
console.log(q1.getSize());
console.log(q1);

console.log(q1.peek());