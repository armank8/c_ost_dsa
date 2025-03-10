// 94. Binary Tree Inorder Traversal
// Recursive DFS (Simple Approach)
var inorderTraversal = function(root) {
    let result=[];
    function dfs(node){
        if(!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

// Example
const tree={
    val:1,
    left:null,
    right:{
        val:2,
        left:{val:3,left:null,right:null},
        right:null
    }
};
console.log(inorderTraversal(tree));