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
}

const tree = new BinaryTree();
tree.insert([1, 2, 3, 4, 5, 6]);

console.log(tree);