// 26. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// SOLUTION

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // base case; when the function should stop running
    if(root == null) return null

    //create a varaible to store the root.left before changing the position
    let temp = root.left;

    //change the postion of the left child node to equal right child node
    root.left = root.right

    //change right child node to equal the temp varaible 
    root.right = temp

    //create 2 recursive functions one for the right child node ; left child node 
    invertTree(root.left);
    invertTree(root.right);  


    //return root
    return root;

};

console.log(invertTree([4,2,7,1,3,6,9]))