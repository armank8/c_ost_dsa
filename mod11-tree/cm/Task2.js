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

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    findNode(node, val) {
        console.log(node, val);
        if (node !== null) {
            if (node.value === val) {
                return node;
            } else if (node.value > val) {
                return this.findNode(node.left, val)
            } else {
                return this.findNode(node.right, val)
            }
        }
        return null;
    }
}

let values = [4, 2, 7, 1, 3];
const bst = new BinarySearchTree();
values.forEach(value => bst.insert(value));
console.log(bst);

console.log(bst.inOrder(bst.root));
console.log(bst.findNode(bst.root, 2));