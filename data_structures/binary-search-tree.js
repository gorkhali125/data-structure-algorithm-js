/**
  A binary search tree (BST) is a binary tree data structure in which each node has at most two child nodes, referred to as the left child and the right child.
  In a BST, the values in the left subtree of a node are less than the node's value, and the values in the right subtree are greater than the node's value.
  This property enables efficient searching, insertion, and deletion of elements.
*/


/**
1. Creating a Binary Search Tree:
- To create a binary search tree, you can define a TreeNode class to represent each node, and a BinarySearchTree class to manage the tree structure.
  The TreeNode class will have a value, a left child, and a right child.
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
  2. Inserting Elements
  - You can insert elements into a BST using the insert operation.
    It involves comparing the value to be inserted with each node and traversing left or right based on the comparison
    until finding an appropriate position to insert a new node.
  */
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  /**
  3. Searching for an Element
  - You can search for an element in a BST using the search operation.
    It involves comparing the target value with each node and traversing left or right based on the comparison
    until finding a match or reaching a leaf node.
  */
  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  /**
  4. Finding the minimum value
  - You can find the minimum value in a BST using the findMin operation. 
    The minimum value is located at the leftmost leaf node.
  */
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  /**
  5. Finding the maximum value
  - You can find the maximum value in a BST using the findMax operation. 
    The maximum value is located at the rightmost leaf node.
  */
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  /**
  6. Traversing the tree
  - You can traverse a BST in different orders: inorder, preorder, and postorder.
  - Inorder traversal visits the left subtree, current node, and then the right subtree.
  - Preorder traversal visits the current node, left subtree, and then the right subtree.
  - Postorder traversal visits the left subtree, right subtree, and then the current node.
  */

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  preorderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  }

  postorderTraversal(node) {
    if (node !== null) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      console.log(node.value);
    }
  }
}


// Example Usage -  Creating a Binary Search Tree
const bst = new BinarySearchTree();

// Inserting Elements
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Searching for an Element
console.log(bst.search(40)); // Output: true
console.log(bst.search(90)); // Output: false

// Finding the Minimum and Maximum Values
console.log(bst.findMin()); // Output: 20
console.log(bst.findMax()); // Output: 80

// Traversing the Tree
console.log("Inorder Traversal:");
bst.inorderTraversal(bst.root);
// Output: 20, 30, 40, 50, 60, 70, 80

console.log("Preorder Traversal:");
bst.preorderTraversal(bst.root);
// Output: 50, 30, 20, 40, 70, 60, 80

console.log("Postorder Traversal:");
bst.postorderTraversal(bst.root);
// Output: 20, 40, 30, 60, 80, 70, 50