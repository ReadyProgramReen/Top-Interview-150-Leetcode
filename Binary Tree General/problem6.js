// 106. Construct Binary Tree from Inorder and Postorder Traversal

// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: inorder = [-1], postorder = [-1]
// Output: [-1]
 

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //given  2 arrays => return binary tree 

    //base case that check if the length of the array is null ,if it is return null
    if(inorder.length == 0 || postorder.length == 0) return null;

    //store the last eleemnt of the postorder 
    let firstRoot = postorder.pop()

    // then use the last element to create the root of a binary tree
    let root = new TreeNode(firstRoot) 

    //find the index of the root element for the inorder array . (middle of the binary tree)
    let middle = inorder.indexOf(firstRoot)

    //add to the right of the binary tree recursively 
    root.right= buildTree(inorder.slice(middle+1),postorder)

    //add to the left of the binary tree recursively 
    root.left = buildTree(inorder.slice(0,middle),postorder)


    //return binary tree 
    return root;
    
};