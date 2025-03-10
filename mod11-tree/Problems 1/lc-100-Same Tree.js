// Leetcode 100. Same Tree
// Recursive

// var isSameTree = function(p, q) {
//     if(!p && !q) return true;
//     if(!p || !q || p.val !== q.val) return false;

//     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
// };

// TimeC -O(N)- We visit each node once, SpaceC -O(H)-


// Iterative
// var isSameTree = function(p, q) {
//     console.log(p,q);
//     let queue = [p,q];
// }

// Example
const p={
    val:1,
    left:{val:2,left:null,right:null},
    right:{val:3,left:null,right:null}
};

const q={
    val:1,
    left:{val:2,left:null,right:null},
    right:{val:3,left:null,right:null}
}

console.log(isSameTree(p,q));