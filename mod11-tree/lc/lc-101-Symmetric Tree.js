// 101. Symmetric Tree

// Recursive DFS
var isSymmetric = function(root) {
    console.log(root);
    if(!root) return true;

    function isMirror(t1,t2){
        if(!t1 && !t2) return true;
        if(!t1 || !t2 || t1.val !==t2.val) return false;

        // compare the left subtree of one with the right subtree of the other
        return isMirror(t1.left,t2.right) && isMirror(t1.right,t2.left);
    }


    return isMirror(root.left,root.right);
};



// Example
const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};

console.log(isSymmetric(tree));