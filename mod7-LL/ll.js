class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    push(value) {
        const newNode = new Node(value);
        console.log(newNode);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }

    pop() {
        let temp = this.head;
        let prev;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    shift() {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    }

    insert(value, pos) {
        let newNode = new Node(value);
        let temp = this.head;
        let prev = temp;
        for (let i = 1; i < pos; i++) {
            console.log(i);
            prev = temp;
            temp = temp.next;
        }
        console.log(temp);
        console.log(prev);
        newNode.next = temp;
        prev.next = newNode
        return this;
    }

    remove(pos) {
        let temp = this.head;
        let prev;
        for (let i = 1; i < pos; i++) {
            prev = temp;
            temp = temp.next;

        }
        // console.log(temp)
        // console.log(prev)
        prev.next=temp.next;
    }
    display() {
        let currNode = this.head;
        let values = [];
        while (currNode !== null) {
            values.push(currNode.value);
            // console.log(currNode.value);
            currNode = currNode.next;
        }
        // console.log(this.count());
        return values;
    }

    count() {
        let currNode = this.head;
        let count = 0;
        // console.log(currNode);
        while (currNode !== null) {
            count++;
            // console.log(currNode.value, count);
            currNode = currNode.next;
        }
        return count;
    }



}

const ll = new LinkedList();
ll.push(7);
ll.push(8);
// ll.push(9);
ll.unshift(4);
ll.unshift(3);
ll.unshift(2);
ll.unshift(1);
// ll.shift();
// console.log(ll.pop());
// console.log(ll.insert(15, 2));
// console.log(ll.insert(16, 5));
console.log(ll.remove(2));
console.log(ll.count());
console.log(ll.display());
// const ll1 = new LinkedList(10);

console.log(ll);