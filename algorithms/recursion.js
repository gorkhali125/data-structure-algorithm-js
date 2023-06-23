/**
    Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem.
    It breaks down a complex problem into smaller, simpler subproblems and solves them until a base case is reached.
    Recursion can be an elegant and powerful approach for solving problems that exhibit self-similar patterns.
*/

/**
    Recursive Algorithm Example: Factorial Calculation
    The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.
    The factorial calculation is a classic example of a problem that can be solved using recursion.
*/
class Recursion {
    factorial(n) {
        // Base case: factorial of 0 or 1 is 1
        if (n === 0 || n === 1) {
            return 1;
        }

        // Recursive case: n! = n * (n-1)!
        return n * this.factorial(n - 1);
    }
}


// Example Usage
const recursion = new Recursion();

const number = 5; // Calculate factorial for 5

console.log(`Factorial of ${number} is: ${recursion.factorial(number)}`);