var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function depth(node) {
    if (!node) return 0;
    let leftHeight = depth(node.left);
    let rightHeight = depth(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }
  depth(root);
  return diameter;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
};

console.log(diameterOfBinaryTree(root));
