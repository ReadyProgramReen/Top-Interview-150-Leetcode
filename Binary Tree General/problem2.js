// //Same Tree


// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// SOLUTION 2 :

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //we dont need a helper function since we dont need to pass any additonal arguments

    //3 base cases
    //check if both nodes are null , return true 
    if(!p && !q) return true;
    //check if one or the other node is null : return false
    if(!p || !q) return false;
    //check if the values are not equal  return false 
    if(p.val !== q.val) return false

    //once all the bases are covered 
   // Recursively check the left children and right children of both trees
    return isSameTree(p.left, q.left) && isSameTree(p.right,q.right)
    
};