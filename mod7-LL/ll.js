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

    insert(value) {
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
    display() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }

}








const ll = new LinkedList();
ll.insert(5);
ll.insert(10);
ll.insert(11);
ll.insert(12);
ll.display();
// const ll1 = new LinkedList(10);

console.log(ll);