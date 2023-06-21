/**
    A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
    It resembles a stack of items, where the last item added is the first one to be removed.
    Think of it as a stack of books, where you can only add or remove books from the top.
    Stacks are commonly used in scenarios that involve nested function calls, expression evaluation, backtracking, and more.
*/


/**
1. Creating a Stack
- To create a stack, you can define a Stack class and initialize an empty array to store the elements.
*/
class Stack {
    constructor() {
        this.elements = [];
    }

    /**
    2. Push (Adding an Element to the Stack)
    - You can add an element to the top of the stack using the push operation. It involves inserting the element at the end of the array.
    */
    push(element) {
        this.elements.push(element);
    }

    /**
    3. Pop (Removing an Element from the Stack):
    - You can remove the element from the top of the stack using the pop operation. It involves removing the last element from the array.
    */
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        return this.elements.pop();
    }

    /**
    4. Peek (Get the Top Element of the Stack without Removing):
    - You can get the element at the top of the stack without removing it using the peek operation. It returns the last element of the array.
    */
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        return this.elements[this.elements.length - 1];
    }

    /**
    5. isEmpty (Check if the Stack is Empty)
    - You can check whether the stack is empty using the isEmpty operation. It returns true if the stack is empty; otherwise, it returns false.
    */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
    6. size (Get the Size of the Stack):
    - You can get the number of elements in the stack using the size operation. It returns the length of the array.
    */
    size() {
        return this.elements.length;
    }
}


// Example usage
const stack = new Stack();
stack.push(2)
stack.push(5)
stack.push(10)
stack.push(7)
console.log(stack) // Output: Stack { elements: [ 2, 5, 10, 7 ] }
console.log(stack.peek()) // Output: 7
stack.pop()
console.log(stack) // Output: Queue { Stack: [ 2, 5, 10 ] }
console.log(stack.size()) // Output: 3