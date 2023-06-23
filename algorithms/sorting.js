/**
    Sorting algorithms are used to arrange a collection of elements in a specific order.
    They are essential for organizing data and are widely used in various applications.
    Different sorting algorithms have different characteristics in terms of time complexity, space complexity, stability, and adaptivity.
    The choice of the sorting algorithm depends on the requirements of the problem and the characteristics of the data.
*/

class Sorting {
    /**
    Sorting Algorithm Example: Bubble Sort
        Bubble Sort is a simple and intuitive comparison-based sorting algorithm.
        It repeatedly compares adjacent elements in the data structure and swaps them if they are in the wrong order.
        This process is repeated until the entire collection is sorted.
    */
    bubbleSort(array) {
        const length = array.length;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap elements if they are in the wrong order
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        return array; // Return the sorted array
    }

    /**
    Sorting Algorithm Example: Quick Sort
        Quick Sort is a widely used sorting algorithm that follows the divide-and-conquer approach.
        It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays,
        according to whether they are less than or greater than the pivot.
        The process is then repeated recursively for each sub-array until the entire array is sorted.
    */
    quickSort(array) {
        if (array.length <= 1) {
            return array; // Base case: Array is already sorted
        }

        const pivot = array[Math.floor(array.length / 2)]; // Choose the pivot element
        const left = [];
        const right = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]); // Elements less than pivot go to the left array
            } else if (array[i] > pivot) {
                right.push(array[i]); // Elements greater than pivot go to the right array
            }
        }

        return [...this.quickSort(left), pivot, ...this.quickSort(right)]; // Recursive call on left and right sub-arrays
    }
}

// Example Usage
const sorting = new Sorting();

const array = [5, 3, 8, 2, 1, 4]; // Example unsorted array
console.log("Original Array:", array);

// Bubble sort
const sortedArray = sorting.bubbleSort(array);
console.log("Bubble Sorted Array:", sortedArray);

// Quick sort
const quickSortedArray = sorting.quickSort(array);
console.log("Quick Sorted Array:", quickSortedArray);