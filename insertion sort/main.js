function InseertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // Tradtional way of swapping items
        // const temp = arr[j - 1]
        // arr[j - 1] = arr[j]
        // arr[j] = temp

        //Short Cut way of swapping
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr
}

console.log(InseertionSort([2, 1, 3, 2, 5, 6, 8, 7]))

/* Notes 
Insertion sort is a simple sorting algorithm that builds the final sorted array
one item at a time by repeatedly taking the next element and inserting it into its correct position in the already sorted portion of the array. 
It is the best sorting algo to use if the data is nearly sorted

Here's a precise definition:

- **Algorithm**: 
  - Start with the second element of the array and assume it's sorted.
  - Iterate through the unsorted portion of the array, comparing each element with the elements in the sorted portion.
  - Move elements greater than the current element one position to the right until finding the correct position for the current element.
  - Insert the current element into its correct position in the sorted portion of the array.
  - Repeat this process for each element in the array until the entire array is sorted.

- **Characteristics**:
  - Simple and easy to implement.
  - Efficient for small datasets or partially sorted arrays.
  - Performs well when the array is nearly sorted or has a small number of inversions.
  - In-place sorting algorithm, meaning it doesn't require additional memory allocation for sorting.

- **Time Complexity**:
  - Best Case: O(n), when the array is already sorted.
  - Worst Case: O(n^2), when the array is sorted in reverse order.
  - Average Case: O(n^2), when the array is randomly shuffled or contains elements in arbitrary order.

- **Space Complexity**:
  - O(1), uses only a constant amount of extra space for variables used in the sorting process.

In summary, insertion sort efficiently sorts small datasets by repeatedly 
nserting each element into its correct position, making it suitable for applications 
where simplicity and efficiency are priorities. 
However, its time complexity can become inefficient for larger datasets, 
making it less suitable for sorting large arrays.

*/
