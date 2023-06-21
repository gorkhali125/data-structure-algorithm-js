/**
  A linked list is a linear data structure composed of nodes, where each node contains data and a reference (or link) to the next node in the list.
  Linked lists provide dynamic memory allocation and efficient insertion and deletion operations compared to arrays.
  There are different types of linked lists, such as singly linked lists, doubly linked lists, and circular linked lists.
*/

/**
1. Creating a Singly Linked List:
To create a linked list, you need to define a Node class that represents each node in the list and initialize the head pointer to null.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
  2. Adding a new node at the beginning of the linked list
  - You can add a new node at the beginning of the linked list by creating a new node,
    updating the next reference of the new node to the current head, and updating the head to point to the new node.
  */
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
  3. Adding a new node at the end of the linked list
  - You can add a new node at the end of the linked list by traversing the list until you reach the last node,
    then creating a new node and updating the next reference of the last node to the new node.
  */
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
  4. Inserting a new node at a specific position in the linked list
  - You can insert a new node at a specific position in the linked list by traversing the list until you reach the desired position,
    then creating a new node and updating the next references accordingly.
  */
  insertAt(position, data) {
    const newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let count = 0;
    let currentNode = this.head;
    let previousNode = null;
    while (count < position && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (count === position) {
      newNode.next = currentNode;
      previousNode.next = newNode;
    } else {
      console.log("Invalid position");
    }
  }

  /**
  5. Removing the first node from the linked list
  - You can remove the first node from the linked list by updating the head to point to the next node.
  */
  removeFirst() {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }
    this.head = this.head.next;
  }

  /**
  6. Removing the last node from the linked list
  - You can remove the last node from the linked list by traversing the list until you reach the second-to-last node and updating its next reference to null.
  */
  removeLast() {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  /**
  7. Removing a node at a specific position in the linked list
  - You can remove a node at a specific position in the linked list by traversing the list until you reach the desired position,
    then updating the next references accordingly.
  */
  removeAt(position) {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let count = 0;
    let currentNode = this.head;
    let previousNode = null;
    while (count < position && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (count === position && currentNode) {
      previousNode.next = currentNode.next;
    } else {
      console.log("Invalid position");
    }
  }

  /**
  8. Searching for a node with a given value in the linked list
  - You can search for a specific value in the linked list by traversing the list and comparing the data of each node with the target value.
  */
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
  9. Traversing the linked list
  - You can traverse the linked list and print the data of each node.
  */
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}


// Example usage:
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.prepend(5);
linkedList.append(20);
linkedList.insertAt(2, 15);
linkedList.removeFirst();
linkedList.removeLast();
linkedList.removeAt(1);

console.log(linkedList.search(10)); // Output: false
console.log(linkedList.search(15)); // Output: true

linkedList.print(); // Output: 5