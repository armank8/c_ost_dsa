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

    // remove from beginning :: time comp: O(1) 
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

    // remove from end :: time comp: O(n) 
    pop() {
        if (!this.head) return null;

        let temp = this.head;
        let pre = this.head;;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        pre.next = null;
        this.tail = pre;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    // find item at specific index :: time comp: O(n)
    get(index) {
        if (index < 0 || this.index >= this.length) return null;
        if (!this.head) return null;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // insert item at specific index :: time comp: O(n)
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
        }
        return temp;
    }

    // insert node at specific index :: time comp: O(n)
    insert(index, value) {
        if (index < 0 || index > this.length) return null;
        // insert node at beginning
        if (index === 0) return this.unshift(value);

        // insert node at the end
        if (index === this.length) return this.push(value);

        // inserting in between
        const newNode = new Node(value);
        let temp = this.head;
        let pre = this.head;
        for (let i = 0; i < index; i++) {
            pre = temp;
            temp = temp.next;
        }
        newNode.next = temp;
        pre.next = newNode;
        this.length++;

        // console.log(pre);
        // console.log(temp);

    }

    // remove node at specific index :: time comp: O(n)
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        // remove node at beginning
        if (index === 0) return this.shift();

        // remove node at the end
        if (index === this.length-1) return this.pop();

        // remove in between
        let temp = this.head;
        let prev;
        for (let i = 0; i < index; i++) {
            prev = temp;
            temp = temp.next;

        }       
        prev.next = temp.next;
        this.length--;
        return temp;
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
ll.unshift(4);
ll.unshift(3);
ll.unshift(2);
ll.unshift(1);
// console.log(ll.pop());
// console.log(ll.insert(3, 15));
// console.log(ll.insert(1, 11));
console.log(ll.count());
console.log(ll.get(3));
// console.log(ll.set(3,11));

console.log(ll.remove(4));
console.log(ll.display());

// console.log(ll.reverse());

console.log(ll);