// Function to merge two sorted arrays
function merge(arr1, arr2) {
  let i = 0, // Initialize pointer for arr1
    j = 0 // Initialize pointer for arr2
  let results = [] // Initialize results array to store merged elements
  // Compare elements of arr1 and arr2 until one of them is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      // If element of arr2 is greater than element of arr1
      results.push(arr1[i]) // Push element of arr1 to results
      i++ // Move to next element in arr1
    } else {
      // If element of arr1 is greater than or equal to element of arr2
      results.push(arr2[j]) // Push element of arr2 to results
      j++ // Move to next element in arr2
    }
  }
  // Push remaining elements of arr1 to results
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  // Push remaining elements of arr2 to results
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results // Return merged array
}

// Function to recursively divide and merge the array
function mergesort(arr) {
  if (arr.length <= 1) return arr // Base case: if array length is 0 or 1, return the array
  let middle = Math.floor(arr.length / 2) // Find middle index of array
  let left = mergesort(arr.slice(0, middle)) // Recursively merge sort left half of array
  let right = mergesort(arr.slice(middle)) // Recursively merge sort right half of array
  return merge(left, right) // Merge sorted left and right halves and return
}

// Example usage of mergesort function with an unsorted array
console.log(mergesort([3, 2, 16, 21, 1, 5, 0]))

/**Merge sort is a divide-and-conquer sorting algorithm that recursively divides the input array into smaller subarrays,
 * sorts them independently, and then merges them back together to produce a sorted array.
 * It follows the following steps:

1. **Divide**: The array is divided into two halves until each subarray contains only one element.

2. **Conquer**: Each subarray of one element is inherently sorted.

3. **Merge**: The sorted subarrays are merged back together in a pairwise manner, repeatedly merging adjacent subarrays while maintaining the sorted order.

Here's a precise explanation of merge sort's characteristics and complexities:

- **Characteristics**:
  - Merge sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements.
  - It is an out-of-place sorting algorithm, as it requires additional space proportional to the size of the input array for merging subarrays.
  - Merge sort is efficient for sorting large datasets due to its consistent time complexity and ability to take advantage of parallel processing.

- **Time Complexity**:
  - Best Case: O(n log n)
  - Worst Case: O(n log n)
  - Average Case: O(n log n)
    - In all cases, merge sort divides the input array into halves recursively, 
    with each division taking O(log n) time. 
    - Merging the subarrays at each level of recursion takes O(n) time.
     Since there are log n levels of recursion, the overall time complexity is O(n log n).

- **Space Complexity**:
  - Merge sort has a space complexity of O(n) due to the need for additional space for the temporary arrays used during the merging process.
  - In the worst-case scenario, when merge sort is implemented recursively, 
  it requires additional space proportional to the size of the input array.
   However, the space complexity can be reduced to O(1) if the merging process is implemented iteratively and in-place.

In summary, merge sort is a highly efficient sorting algorithm with a consistent time complexity of O(n log n) for all cases.
 While it requires additional space for merging subarrays, 
 its stability, and ability to efficiently handle large datasets make it a popular choice for sorting applications.*/
