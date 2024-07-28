class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // adding at the end : time com : O(1)
    push(value) {
        const newNode = new Node(value);
        console.log(newNode);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // adding at the beginning ::: time com : O(1)
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // remove from start :: time comp: O(1) 
    shift() {
        if (!this.head) return null;

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    // remove from end :: time comp: O() 
    pop() {
        if (!this.head) return null;

        let temp = this.head;
        let pre= this.head;;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        pre.next = null;
        this.tail=pre;
        this.length--;
        
        return temp;
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
        prev.next = temp.next;
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

    reverse() {
        let temp = this.head;
        let next = null;
        let prev = null;
        console.log(this.count());
        for (let i = 1; i <= this.count(); i++) {
            console.log(i);
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this
    }

}

const ll = new LinkedList(10);
console.log(ll);
// ll.push(7);
// ll.push(8);
// ll.push(9);
ll.unshift(4);
ll.unshift(3);
ll.unshift(2);
ll.unshift(1);
// ll.shift();
// console.log(ll.pop());
// console.log(ll.insert(15, 2));
// console.log(ll.insert(16, 5));
// console.log(ll.remove(2));
console.log(ll.count());
console.log(ll.display());

console.log(ll.reverse());

console.log(ll);