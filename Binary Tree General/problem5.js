// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
 

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // preorder: Root first, then left, then right
    //inorder: Left, then root, then right

    //base case
    if (preorder.length === 0 || inorder.length === 0) return null;

    //the first node in a preorder is alway the root 
    const firstElement = preorder[0]
    
    //create a new node with the preorder first element 
    const root = new TreeNode(firstElement)

    //whereever the root is in inorder traversal is the middle of the tree(dividing left and right)
    //find the index of the root in the inorder (the split of the right and left side )
    let mid = inorder.indexOf(firstElement)

    //recursively find all the left nodes with slice and store it in root.right
     root.left = buildTree(preorder.slice(1,mid+1), inorder.slice(0,mid))

    //recursively find all the right nodes with slice and store it in root.right
     root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))


    //return root
    return root
    
};