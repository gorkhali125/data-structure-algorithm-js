/**
    The Divide and Conquer algorithmic paradigm involves breaking down a problem into smaller subproblems,
    solving each subproblem independently, and then combining the solutions of the subproblems to obtain the final solution.
    It typically follows a recursive approach and is widely used in various algorithms and problem-solving techniques.
*/

/**
    Merge Sort Algorithm:
    Merge Sort is a sorting algorithm that follows the Divide and Conquer paradigm.
    It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to obtain the final sorted array. 
    The key step is the merging process, where two sorted subarrays are combined to form a larger sorted array.
*/

class MergeSort {
    merge(arr, left, middle, right) {
        const leftSize = middle - left + 1;
        const rightSize = right - middle;

        const leftArray = new Array(leftSize);
        const rightArray = new Array(rightSize);

        // Copy data to temporary arrays
        for (let i = 0; i < leftSize; i++) {
            leftArray[i] = arr[left + i];
        }
        for (let j = 0; j < rightSize; j++) {
            rightArray[j] = arr[middle + 1 + j];
        }

        // Merge the temporary arrays
        let i = 0; // Initial index of first subarray
        let j = 0; // Initial index of second subarray
        let k = left; // Initial index of merged subarray

        while (i < leftSize && j < rightSize) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of leftArray[]
        while (i < leftSize) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }

        // Copy the remaining elements of rightArray[]
        while (j < rightSize) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, left, right) {
        if (left < right) {
            const middle = Math.floor((left + right) / 2);

            // Sort first and second halves
            this.mergeSort(arr, left, middle);
            this.mergeSort(arr, middle + 1, right);

            // Merge the sorted halves
            this.merge(arr, left, middle, right);
        }
    }
}


// Example Usage
const mergeSort = new MergeSort();

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original Array: " + arr.join(", "));

mergeSort.mergeSort(arr, 0, arr.length - 1);

console.log("Sorted Array: " + arr.join(", "));