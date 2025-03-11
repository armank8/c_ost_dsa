// lc-102-Binary Tree Level Order Traversal.js

var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];

    while(queue.length>0){
        let levelSize = queue.length;
        let levelNodes =[];

        for(let i=0; i<levelSize; i++){
            let node = queue.shift();
            levelNodes.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        result.push(levelNodes);
    }
    return result;
};


// Example
const tree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

console.log(levelOrder(tree));