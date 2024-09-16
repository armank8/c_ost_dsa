class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // insert values manually in a bin tree
    insert(values) {
        if (!values || values.length === 0) return;

        this.root = new TreeNode(values[0]);

        // use a queue to insert values level by level (BFS insertion)
        let queue = [this.root];
        let index = 1;

        while (queue.length > 0 && index < values.length) {
            let currNode = queue.shift();

            if (index < values.length) {
                currNode.left = new TreeNode(values[index++]);
                queue.push(currNode.left);
            }

            if (index < values.length) {
                currNode.right = new TreeNode(values[index++]);
                queue.push(currNode.right)
            }


        }
    }

    dfsPreOrder(node) {
        if (!node) return;
        console.log(node.value);
        this.dfsPreOrder(node.left);
        this.dfsPreOrder(node.right);
    }
    dfsInOrder(node) {
        if (!node) return;
        this.dfsInOrder(node.left);
        console.log(node.value);
        this.dfsInOrder(node.right);
    }
    dfsPostOrder(node) {
        if (!node) return;
        this.dfsPostOrder(node.left);
        this.dfsPostOrder(node.right);
        console.log(node.value);
    }

    bfs(node) {
        if (!node) return;
        let queue = [node];
        while (queue.length > 0) {
            let currNode = queue.shift();
            console.log(currNode.value);

            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
    }

    invertTree(node) {
        if (!node) return null;
        let left = this.invertTree(node.left);
        let right = this.invertTree(node.right);

        node.left = right;
        node.right = left;

        return node;
    }
    maxDepth(node) {
        if (!node) return 0;

        let leftDepth = this.maxDepth(node.left);
        let rightDepth = this.maxDepth(node.right);

        return Math.max(leftDepth, rightDepth) + 1;

    }

    findValue(node, value) {
        if (!node) return false;
        if (node.value === value) return node;

        return this.findValue(node.left, value) || this.findValue(node.right, value);
    }
    countLeafNode(node) {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;
        return this.countLeafNode(node.left) + this.countLeafNode(node.right);
    }
}

const tree = new BinaryTree();
tree.insert([1, 2, 3, 4, 5, 6,7,8,9]);
console.log(tree.dfsPreOrder(tree.root));
console.log(tree.dfsInOrder(tree.root));
console.log(tree.dfsPostOrder(tree.root));
console.log(tree.bfs(tree.root));

// console.log(tree.invertTree(tree.root));
console.log(tree.maxDepth(tree.root));
console.log(tree.findValue(tree.root, 3));
console.log(tree.countLeafNode(tree.root));

console.log(tree);

