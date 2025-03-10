// 110. Balanced Binary Tree
// Recursive DFS (Bottom-Up)

var isBalanced = function(root) {
    function checkHeight(node){
        if(!node) return 0;

        let leftHeight = checkHeight(node.left);
        if(leftHeight ===-1) return -1;

        let rightHeight = checkHeight(node.right);
        if(rightHeight ===-1) return -1;

        if(Math.abs(leftHeight-rightHeight)>1) return -1;
        return Math.max(leftHeight,rightHeight) +1;
    }

    return checkHeight(root) !== -1;
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

console.log(isBalanced(tree));