// BINARY SEARCH IS USED WHEN DATA OF AN ARRAY IS SORTED
// TAKES LESS TIME TO SEARCH BY USING DIVIDE AND CONQUER TECHNIQUE
// Time Complexity : Best -> O(1)  Wrost & Average -> O(LOG N)
function BinarySearch(arr, searchelement) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2) // getting the middle

  while (start <= end) {
    // will run till array follows this condtion
    if (arr[middle] == searchelement) return middle

    if (arr[middle] < searchelement) start = middle + 1 // start moved forward

    if (arr[middle] > searchelement) end = middle - 1 // end moved back

    middle = Math.floor((start + end) / 2) // again calculated
  }

  return false // element not in array
}

const arr = ['A', 'B', 'F', 'G', 'I', 'K', 'Z']

const searchele = 'I'

const foundindex = BinarySearch(arr, searchele)
foundindex
  ? console.log(`element found at :${foundindex} index`)
  : console.log('ELEMENT NOT FOUND')
