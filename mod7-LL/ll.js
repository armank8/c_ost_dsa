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

    insertAtEnd(value) {
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

    insertAtFirst(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtPos(value, pos) {
        const newNode = new Node(value);
        let currNode = this.head;
        let count = 0;
        while (count !== pos) {
            count++;
            console.log(count);
            currNode = currNode.next;
            console.log(currNode);
        }
        console.log(currNode);
        newNode.next = currNode.next;
        currNode.next = newNode;

        return this;

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
ll.insertAtEnd(5);
ll.insertAtEnd(10);
ll.insertAtEnd(11);
ll.insertAtFirst(4);
ll.insertAtFirst(3);
console.log(ll.display());
console.log(ll.count());
console.log(ll.insertAtPos(15, 3));
// const ll1 = new LinkedList(10);

console.log(ll);