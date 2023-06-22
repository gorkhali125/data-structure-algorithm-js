/**
    Dynamic Programming is an algorithmic paradigm that solves complex problems by breaking them down into smaller overlapping subproblems
    and solving each subproblem only once. It utilizes the idea of storing the solutions of subproblems to avoid redundant computation,
    which leads to improved time and space efficiency.
*/

/**
    Dynamic Programming Example: Fibonacci Sequence
    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The sequence starts with 0 and 1.
    The Fibonacci sequence is often used as an introductory example for understanding Dynamic Programming due to its recursive nature and overlapping subproblems.
*/
class Fibonacci {
    constructor() {
        this.memo = {}; // Memoization table to store computed values
    }

    fibonacci(n) {
        if (n <= 1) {
            return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
        }

        // Check if the value is already computed
        if (n in this.memo) {
            return this.memo[n];
        }

        // Compute the value and store it in the memoization table
        const result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
        this.memo[n] = result;

        return result;
    }
}

// Example Usage
const fib = new Fibonacci();

console.log(fib.fibonacci(6)); // Output: 8
console.log(fib.fibonacci(10)); // Output: 55
console.log(fib.fibonacci(15)); // Output: 610