/**
    A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
    It resembles a real-world queue, such as people standing in line.
    In a queue, elements are added at one end called the rear and removed from the other end called the front.
    Queues are commonly used in scenarios where the order of processing matters, like handling requests, tasks, or events.
*/


/**
1. Creating a Queue
- To create a queue, you can define a Queue class and initialize an empty array to store the elements.
*/
class Queue {
    constructor() {
        this.elements = [];
    }

    /**
    2. Enqueue (Adding an Element to the Queue)
    - You can add an element to the rear of the queue using the enqueue operation. It involves inserting the element at the end of the array.
    */
    enqueue(element) {
        this.elements.push(element);
    }

    /**
    3. Dequeue (Removing an Element from the Queue)
    - You can remove the element from the front of the queue using the dequeue operation. It involves removing the first element from the array.
    */
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.elements.shift();
    }

    /**
    4. Peek (Get the Front Element of the Queue without Removing)
    - You can get the element at the front of the queue without removing it using the peek operation. It returns the first element of the array.
    */
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.elements[0];
    }

    /**
    5. isEmpty (Check if the Queue is Empty)
    - You can check whether the queue is empty using the isEmpty operation. It returns true if the queue is empty; otherwise, it returns false.
    */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
    6. size (Get the Size of the Queue):
    - You can get the number of elements in the queue using the size operation. It returns the length of the array.
    */
    size() {
        return this.elements.length;
    }
}


// Example usage
const queue = new Queue();
queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(7)
console.log(queue) // Output: Queue { elements: [ 2, 5, 10, 7 ] }
console.log(queue.peek()) // Output: 2
queue.dequeue()
console.log(queue) // Output: Queue { elements: [ 5, 10, 7 ] }
console.log(queue.size()) // Output: 3