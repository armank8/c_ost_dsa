class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;
    }
}

function createBinaryTree(nums){
    console.log(nums);
    const root = new TreeNode(nums[0]);
    let queue = [root];

    let i=1;
    while(i<nums.length){
        let node = queue.shift();
        if(nums[1]!==null){
            node.left= new TreeNode(nums[i]);
            queue.push(node.left);
        }
        i++;

        if(i<nums.length && nums[i] !== null){
                node.right = new TreeNode(nums[i])
                queue.push(node.right);          
        }
        i++;
    }
    console.log(root);
}

console.log(createBinaryTree([1,2,3,4,5,6,7]));