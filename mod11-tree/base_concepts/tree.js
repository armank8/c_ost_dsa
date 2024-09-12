class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(value, parentNode = null) {
        // console.log(this.root);
        // console.log(value);
        // console.log(parentNode);
        const newNode = new TreeNode(value);
        // console.log(newNode)
        if (!this.root) {
            this.root = newNode;
        } else {
            const parent = parentNode || this.root;
            parent.children.push(newNode);
        }
        return newNode;
    }

    dfs(node = this.root, visitFn) {
        visitFn(node);
        console.log(node.value);

        if (node.children.length > 0) {
            node.children.forEach(child => this.dfs(child, visitFn))
        }
        // console.log(node.value);
        return node.value;
    }
}


const tree = new Tree();

const node1 = tree.insert(1);
const node2 = tree.insert(2, node1);
const node3 = tree.insert(3, node1);
const node4 = tree.insert(4, node2);
const node5 = tree.insert(5, node2);
const node6 = tree.insert(6, node3);

console.log(tree);

tree.dfs(undefined, node => console.log(node.value));