/**
  An array is a fundamental data structure in programming that allows you to store a collection of elements of the same type.
  Each element in the array is assigned a unique index starting from 0, which allows for efficient access to elements.
  Arrays are commonly used to store and manipulate lists of data.
*/


/**
1. Creating an Array:
- To create an array, you can use square brackets [] and assign it to a variable.
- Elements can be added when the array is created or later on.
*/
const array = [10, 20, 30];


/**
2. Accessing Elements:
- You can access individual elements in an array using their index.
- Indexing starts from 0, so the first element is at index 0, the second at index 1, and so on.
*/
console.log(array[0]); // Output: 10
console.log(array[1]); // Output: 20
console.log(array[2]); // Output: 30


/**
3. Updating Elements:
- You can update the value of an element in an array by assigning a new value to a specific index.
*/
array[1] = 25;
console.log(array); // Output: [10, 25, 30]


/**
4. Adding Elements to the End:
- You can add elements to the end of an array using the push() method.
*/
array.push(40);
console.log(array); // Output: [10, 25, 30, 40]


/**
5. Adding Elements to the Beginning:
- You can add elements to the beginning of an array using the unshift() method.
*/
array.unshift(5);
console.log(array); // Output: [5, 10, 25, 30, 40]


/**
6. Removing Elements from the End:
- You can remove the last element from an array using the pop() method.
- The pop() method also returns the removed element.
*/
const lastElement = array.pop();
console.log(lastElement); // Output: 40
console.log(array); // Output: [5, 10, 25, 30]


/**
7. Removing Elements from the Beginning:
- You can remove the first element from an array using the shift() method.
- The shift() method also returns the removed element.
*/
const firstElement = array.shift();
console.log(firstElement); // Output: 5
console.log(array); // Output: [10, 25, 30]


/**
8. Inserting Elements at a Specific Index:
- You can insert elements at a specific index in an array using the splice() method.
- The splice() method modifies the original array by inserting or removing elements.
*/
array.splice(1, 0, 15);
console.log(array); // Output: [10, 15, 25, 30]


/**
9. Removing Elements at a Specific Index:
- You can remove elements at a specific index in an array using the splice() method.
- The splice() method modifies the original array by inserting or removing elements.
*/
const removedElements = array.splice(1, 2);
console.log(removedElements); // Output: [15, 25]
console.log(array); // Output: [10, 30]


/**
10. Finding the Length of an Array:
- You can find the length (number of elements) in an array using the length property.
*/
console.log(array.length); // Output: 2


/**
11. Iterating over an Array:
- You can iterate over each element in an array using loops like for() or forEach().
- This allows you to perform operations on each element of the array.
*/
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach((element) => {
  console.log(element);
});