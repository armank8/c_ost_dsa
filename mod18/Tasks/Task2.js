function arrayToBST(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let index = 1;

  while (index < arr.length) {
    const current = queue.shift();

    if (arr[index] !== null) {
      current.left = new TreeNode(arr[index]);
      queue.push(current.left);
    }
    index++;

    if (index < arr.length && arr[index] !== null) {
      current.right = new TreeNode(arr[index]);
      queue.push(current.right);
    }
    index++;
  }

  return root;
}

function isValidBST(root) {
  function validate(node, min, max) {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// const arr1 = [2, 1, 3];
const arr1 = [5, 1, 4, null, null, 3, 6];
const root1 = arrayToBST(arr1);
console.log(isValidBST(root1));
