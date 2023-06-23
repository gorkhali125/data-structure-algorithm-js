/**
    Searching algorithms are used to find a specific element within a collection of data.
    They are fundamental to solving various problems efficiently. Different searching algorithms have different characteristics,
    such as time complexity and the requirement for the data to be sorted.
    The choice of the searching algorithm depends on the problem requirements and the characteristics of the data.
*/

class Searching {
    /**
    Searching Algorithm Example: Linear Search:
        Linear Search is a simple searching algorithm that sequentially checks each element of the data structure until it finds the target element
        or reaches the end of the collection. It is applicable to both sorted and unsorted data.
    */
    linearSearch(array, target) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                return i; // Return the index of the target element
            }
        }

        return -1; // Target element not found
    }

    /**
    Searching Algorithm Example: Binary Search:
        Binary Search is a searching algorithm that works efficiently on sorted arrays.
        It follows a divide-and-conquer approach by repeatedly dividing the search space in half until the target element is found or the search space is exhausted.
        Binary Search eliminates half of the remaining elements in each step, making it significantly faster than linear search.
    */
    binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (array[mid] === target) {
                return mid; // Return the index of the target element
            } else if (array[mid] < target) {
                left = mid + 1; // Target is in the right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }

        return -1; // Target element not found
    }
}


// Example Usage
const searching = new Searching();

const array = [10, 7, 5, 2, 8]; // Example array
const target = 5; // Element to search for

// Linear Search
const index = searching.linearSearch(array, target);

if (index !== -1) {
    console.log(`Linear Search: Element ${target} found at index ${index}`);
} else {
    console.log(`Linear Search: Element ${target} not found`);
}


// Binary Search
const indexBinary = searching.binarySearch(array, target);

if (indexBinary !== -1) {
    console.log(`Binary Search: Element ${target} found at index ${index}`);
} else {
    console.log(`Binary Search: Element ${target} not found`);
}