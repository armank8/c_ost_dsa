var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    if(!root.left && !root.right && targetSum==root.val) return true;

    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val);
};
console.log(hasPathSum());





// Example
const tree={
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:{val:7,left:null,right:null},
            right:{val:2,left:null,right:null},
        },
        right:null
    },
    right:{
        val:8,
        left:{val:43,left:null,right:null},
        right:{
            val:4,
            left:null,
            right:{val:1,left:null,right:null}
        }
    }
};
console.log(hasPathSum(tree,22));
console.log(hasPathSum(tree,27));