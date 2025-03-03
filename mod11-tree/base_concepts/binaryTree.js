class TreeNode{
    constructor(value=0,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }}

    function createBinaryTree(arr) {
        if(!arr || arr.length<0) return null;

        const root = new TreeNode(arr[0]);
        const queue = [root];
        let i=1;

        while(i<arr.length){
            const curr = queue.shift();

            if(arr[i]!==null){
                curr.left = new TreeNode(arr[i]);
                queue.push(curr.left);
            }
            i++;

            if(i<arr.length && arr[i]!==null ){
                curr.right = new TreeNode(arr[i]);
                queue.push(curr.right);
            }
            i++;
        }
        return root;
    }



const tree=createBinaryTree([1,2,3,null,4]);
console.log(tree);