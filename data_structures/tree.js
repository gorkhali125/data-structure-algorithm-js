/**
    A tree is a widely used non-linear data structure that represents a hierarchical structure.
    It consists of nodes connected by edges, with a single node called the root serving as the starting point.
    Each node can have zero or more child nodes, forming subtrees.
    Trees are commonly used to represent hierarchical relationships, such as file systems, organization charts, and more.
*/


/**
1. Creating a Tree
- To create a tree, you can define a TreeNode class to represent each node, and a Tree class to manage the tree structure. 
  The TreeNode class will have a value and an array to store its child nodes.
*/
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    /**
    2. Adding Child Nodes to a Parent Node
    - You can add child nodes to a parent node in the tree using the addChild operation.
      It involves creating a new TreeNode instance with the given value and adding it to the children array of the parent node.
    */
    addChild(parentNode, value) {
        const newNode = new TreeNode(value);
        parentNode.children.push(newNode);
    }

    /**
    3. Removing Child Nodes from a Parent Node
    - You can remove child nodes from a parent node in the tree using the removeChild operation.
      It involves finding the node to remove in the children array of the parent node and removing it.
    */
    removeChild(parentNode, childNode) {
        const index = parentNode.children.indexOf(childNode);
        if (index !== -1) {
            parentNode.children.splice(index, 1);
        }
    }

    /**
    4. Depth-First Traversal
    - You can perform a depth-first traversal of the tree using the depthFirstTraversal operation.
      It visits each node starting from the root and explores its children recursively before moving to the next sibling.
    */
    depthFirstTraversal(node) {
        console.log(node.value); // Process the node
        for (const child of node.children) {
            this.depthFirstTraversal(child.value); // Recursively traverse child nodes
        }
    }

    /**
    5. Breadth-First Traversal
    - You can perform a breadth-first traversal of the tree using the breadthFirstTraversal operation.
      It visits each node level by level, starting from the root and moving to its children before moving to the next level.
    */
    breadthFirstTraversal() {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }
        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode.value);  // Process the node
            for (const child of currentNode.children) {
                queue.push(child.value);  // Enqueue child nodes
            }
        }
    }

    /**
    6. Printing the tree structure
    - You can print the tree structure starting from root node and recursively printing it's children
    */
    printTree() {
        if (!this.root) {
            console.log("The tree is empty.");
            return;
        }

        const printNode = (node, level = 0) => {
            const indent = " ".repeat(level * 4);
            console.log(`${indent}- ${node.value}`);
            for (const child of node.children) {
                printNode(child.value, level + 1);
            }
        };

        console.log("Tree Structure:");
        printNode(this.root);
    }
}


// Example Usage - Creating a Tree
const tree = new Tree();

// Creating Nodes
const rootNode = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");

// Building the Tree
tree.root = rootNode;
tree.addChild(rootNode, nodeB);
tree.addChild(rootNode, nodeC);
tree.addChild(nodeB, nodeD);
tree.addChild(nodeB, nodeE);
tree.addChild(nodeC, nodeF);

tree.printTree();

// console.log(tree);

// Traversing the Tree
console.log("Depth-First Traversal:");
tree.depthFirstTraversal(rootNode);
// Output: A, B, D, E, C, F

console.log("Breadth-First Traversal:");
tree.breadthFirstTraversal();
// Output: A, B, C, D, E, F

// Removing a Child Node
tree.removeChild(nodeB, nodeE);