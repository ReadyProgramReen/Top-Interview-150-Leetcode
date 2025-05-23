// Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// SOLUTION:

var hasPathSum = function(root, targetSum) {
  // Base Case 1: If the tree is empty, return false
    if (!root) return false;
    
    // Base Case 2: If it's a leaf node, check if the current value matches the remaining target
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    //  Recursive Case: Subtract the current node's value and explore children
    let newTarget = targetSum - root.val;

    // Recurse left and right
    return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);

};