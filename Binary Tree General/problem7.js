// 17. Populating Next Right Pointers in Each Node II

// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL. 


//SOLUTION:

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    //early return if root is null return null
    if(!root) return null

    //declare a queue and initalize it with root 
    let queue = [root]

    //create a while loop that runs while the queue is greater than 0
    while(queue.length > 0){
    // declare a varaiable that stores the length of the queue
        let size = queue.length

     //create a for loop that iterates over the size 
     for(let i = 0 ; i < size; i++){
        //remove the first element in the queue
        let currentNode = queue.shift()

        //check if the i of loop is less than then last index
        //true : point the next to the next element in the level
        //if false point the last element to null
        if(i < size -1){
            currentNode.next = queue[0]
        }else{
            currentNode.next = null
        }

        //check if the current node has a left node and add to the queue
        //check if the current node has a right node and add to the queue
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)


     }
    }
        //return the root
        return root
};
