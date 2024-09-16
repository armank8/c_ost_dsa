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

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);

        }
    }
}

const tree = new BinaryTree();
tree.insert([1, 2, 3, 4, 5, 6]);
console.log(tree.dfsPreOrder(tree.root));
console.log(tree.dfsInOrder(tree.root));
console.log(tree.dfsPostOrder(tree.root));
console.log(tree.bfs(tree.root));

console.log(tree);

