// 145. Binary Tree Postorder Traversal

var postorderTraversal = function(root) {
    let result=[];
    function dfs(node){
        if(!node) return;
        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
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
console.log(postorderTraversal(tree));