// 144. Binary Tree Preorder Traversal


var preorderTraversal = function(root) {
    let result=[];
    function dfs(node){
        if(!node) return;
        result.push(node.val);
        dfs(node.left);
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
console.log(preorderTraversal(tree));