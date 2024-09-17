class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(values) {
        console.log(values);
        if (!values && values.length === 0) return;

        this.root = new TreeNode(values[0]);
        let queue = [this.root];



        let index = 1;
        while (queue.length >= 0 && index < values.length) {
            let currNode = queue.shift();
            if (index < values.length) {
                currNode.left = new TreeNode(values[index++]);
                queue.push(currNode.left);
            }
            if (index < values.length) {
                currNode.right = new TreeNode(values[index++]);
                queue.push(currNode.right);
            }
        }

        return this.root;
    }
}

const tree = new Tree();
// console.log(tree.insert([3, 9, 20, null, null, 15, 7]));
console.log(tree.insert([1, null, 2]));