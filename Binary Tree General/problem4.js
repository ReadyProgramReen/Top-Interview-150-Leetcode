// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
//SOLUTION

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
//edge case: when root is null
if(!root) return true;

//define a helper function with 2 parameters
function isMirror(leftSubTree,rightSubTree ){
//3 base cases
//check if both sides are empty return true
if(!leftSubTree && !rightSubTree) return true
//check if only one side is empty return false
if(!leftSubTree || !rightSubTree) return false
//check if the values are not equal return false
if(leftSubTree.val !== rightSubTree.val)return false

//return the boolean of the recursive function checking the symmetry
return isMirror(leftSubTree.left,rightSubTree.right) && isMirror(leftSubTree.right,rightSubTree.left)

//close helper function
}
//return the call of the helper function with the right and left root argument
  return  isMirror(root.left,root.right)
};