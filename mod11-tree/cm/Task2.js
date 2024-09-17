class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        console.log(value);
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        console.log(node, newNode);
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node = this.root, target) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            if (node.value === target) {
                return true
            }
            // return node.value;
            this.inOrder(node.right);
        }
    }
}

const bst = new BinarySearchTree();
let values = [4, 2, 7, 1, 3];
values.forEach(value => bst.insert(value));
console.log(bst);
console.log(bst.inOrder(this.root, 2));