// 226. Invert Binary Tree
// Recursive DFS

var invertTree = function(root) {
    if(!root) return null;

    [root.left,root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};
// TimeC -O(N)- We visit each node once
// SpaceC -O(H)- Recursion stack height


// example
const tree={
    val:4,
    left:{
        val:2,
        left:{val:1,left:null,right:null},
        right:{val:3,left:null,right:null}
    },
    right:{
        val:7,
        left:{val:6,left:null,right:null},
        right:{val:9,left:null,right:null}
    }
};
console.log(invertTree(tree));