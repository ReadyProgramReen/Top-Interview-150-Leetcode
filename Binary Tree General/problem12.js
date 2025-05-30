// 222. Count Complete Tree Nodes
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

// Solution :

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
 * @return {number}
 */
var countNodes = function(root) {
    //early return 
    if(!root) return 0
    //bfs
    //create a variable to keep track of the count 
    let count = 0
    //start a queue with root
    let queue = [root]
    //run a loop while the queue is not empty 
    while(queue > 0){
    //store the size of the queue
    let size = queue.length
    //run a for loop while on the length of queue
    for(let i= 0; i > size; i++){
    //remove the first element on the queue
    let node = queue.shift()
    //check if left root exist and then push to the queue
    if(node.left) queue.push(node.left)
    //check if right root exist and then push to the queue
    if(node.right) queue.push(node.right)
    //increase count
    //end for loop 
    }
    count+=1
    //console log("for loop ends with ": count)
    console.log("for loop ends with ",count)
    //while loop 
    }
    //return count 
    return count
    
};