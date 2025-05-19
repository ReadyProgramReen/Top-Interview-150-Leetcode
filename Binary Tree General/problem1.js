

//  Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// SOLUTION #1: DFS

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
var maxDepth = function(root) {
    //DFS 

    // Base case : if the root is null return 0
    if(!root) return 0

    //Recursively find the deep of the left and right, then keep only the larger node and add 1 for the current nodee 
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    
};



// SOLUTION #2: BFS

var maxDepth = function(root) {
    //BFS

     //cover the basis of a null root  
    if(root == null) return 0 ;

    //declare a queue : initalizing it to an array with root
    let queue = [root]
    // declare a level variable and set it to 0 
    let level = 0

    // create a while loop that runs while the length of queue variable is greater than 0 
    while(queue.length > 0){
    //declare a variable that stores the length of queue variable 
    let size = queue.length
    //create a for loop that iterates over the length of queue varaiabe 
    for(let i = 0; i < size; i++){
     // remove the first element in the queue and store the value in a variable
     let node = queue.shift();

    //check if the node has a left variable if so add it to the queue 
    if(node.left !== null) queue.push(node.left)

    //check if the right node is not null; then push to queue 
    if(node.right !== null) queue.push(node.right)


    //close for loop
    }

    //increment level by 1 
    level+=1

    //close while loop 

    }
    //return level 
    return level;

    
    
};