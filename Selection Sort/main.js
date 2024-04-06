// Selection Sort arranges array by moving the minimum values to their correct postions
function selectionsort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let Lowest = index

    for (let j = index + 1; j < arr.length; j++) {
      if (arr[Lowest] > arr[j]) {
        // if new minium is found then lowest is updated
        Lowest = j
      }
    }

    if (Lowest !== index) {
      // swap is only done if new minimum is found
      let temp = arr[index]
      arr[index] = arr[Lowest]
      arr[Lowest] = temp
    }
  }
  return arr
}

console.log('The Sorted Arr :', selectionsort([3, 5, 2, 1, 0, 9, 8]))

/*


n summary, the best-case, worst-case, and average-case time complexities of selection sort are all O(n^2), 
making it inefficient for large datasets. 
In summary, although selection sort and bubble sort have the same time complexity,
 selection sort may perform better in terms of the number of swaps, 
making it slightly more efficient than bubble sort in certain scenarios.
 However, both algorithms are generally considered inefficient compared to more advanced sorting algorithms for large datasets.*/
