class Node {
  constructor(val) {
    this.val = val // Value of the node
    this.next = null // Pointer to the next node in the list
  }
}

class singlelinklist {
  constructor() {
    this.head = null // Pointer to the first node in the list (initially null)
    this.tail = null // Pointer to the last node in the list (initially null)
    this.length = 0 // Number of nodes in the list (initially 0)
  }

  // Method to add a new node to the end of the list
  push(val) {
    const newNode = new Node(val) // Create a new node with the given value

    if (!this.head) {
      // If the list is empty
      this.head = newNode // Set both head and tail to the new node
      this.tail = newNode
    } else {
      // If the list is not empty
      this.tail.next = newNode // Append the new node to the end of the list
      this.tail = newNode // Update the tail pointer to the new node
    }

    this.length++ // Increment the length of the list
    return this // Return the modified list
  }

  // Method to add a new node to the beginning of the list
  pushAtStart(val) {
    const newNode = new Node(val) // Create a new node with the given value

    if (!this.head) {
      // If the list is empty
      this.head = newNode // Set both head and tail to the new node
      this.tail = newNode
    } else {
      // If the list is not empty
      newNode.next = this.head // Make the new node point to the current head
      this.head = newNode // Update the head pointer to the new node
    }

    this.length++ // Increment the length of the list
    return this // Return the modified list
  }

  // Method to delete the first node from the list
  deleteStart() {
    if (!this.head) {
      // If the list is empty, return null
      return null
    }

    let node = this.head.next // Get the next node after the current head

    if (!node) {
      // If there was only one node in the list
      this.head = null // Set both head and tail to null
      this.tail = null
    } else {
      this.head = node // Update the head pointer to the next node
    }

    this.length-- // Decrement the length of the list
  }

  // Method to display the list as a series of values separated by arrows
  showList() {
    let current = this.head // Start from the head of the list

    while (current) {
      // Loop until the current node is null
      if (current.next) {
        // If the current node has a next node
        console.log(`${current.val} -> ${current.next.val}`) // Display the current node's value and the value of its next node
      }
      current = current.next // Move to the next node
    }
  }

  // Method to insert a new node at a specified position in the list
  insertAtPosition(val, position) {
    if (position < 0 || position > this.length) {
      // Check for invalid position
      return false
    }

    const newNode = new Node(val) // Create a new node with the given value

    if (position === this.length) {
      // If the position is at the end of the list
      this.push(newNode.val) // Add the new node to the end of the list
      return true
    }

    if (position === 0) {
      // If the position is at the beginning of the list
      this.pushAtStart(newNode.val) // Add the new node to the beginning of the list
      return true
    }

    let current = this.getNode(position - 1) // Get the node before the specified position
    newNode.next = current.next // Make the new node point to the next node
    current.next = newNode // Make the previous node point to the new node

    this.length++ // Increment the length of the list
    return true // Return true to indicate successful insertion
  }

  // Method to search for a value in the list
  search(item) {
    if (!this.head) {
      // If the list is empty
      return null
    }

    let current = this.head // Start from the head of the list
    let index = 1 // Initialize the index counter

    while (current) {
      // Loop until the current node is null
      if (current.val == item) {
        // If the current node's value matches the search item
        return `${item} FOUND AT POSITION ${index}` // Return a message indicating the item was found
      }
      current = current.next // Move to the next node
      index++ // Increment the index counter
    }

    return 'ITEM NOT FOUND IN LIST' // Return a message indicating the item was not found
  }

  // Method to get the node at a specified position in the list
  getNode(position) {
    if (position < 0 || position >= this.length) {
      // Check for invalid position
      return null
    }

    let current = this.head // Start from the head of the list
    let counter = 0 // Initialize the counter

    while (counter < position) {
      // Loop until the counter reaches the specified position
      current = current.next // Move to the next node
      counter++ // Increment the counter
    }

    return current // Return the node at the specified position
  }

  // Method to remove the node at a specified position in the list
  removeAtPosition(position) {
    let prev = this.getNode(position - 1) // Get the node before the one to be deleted
    let current = this.getNode(position) // Get the node to be deleted

    prev.next = current.next // Make the previous node point to the next node
    current.next = null // Remove the reference to the next node from the current node

    this.length-- // Decrement the length of the list

    return `${current.val} REMOVED FROM THE LIST` // Return a message indicating the node was removed
  }

  // Method to reverse the list
  reverse() {
    let node = this.head // Start from the head of the list
    this.head = this.tail // Make the tail the new head
    this.tail = node // Make the old head the new tail
    let prev,
      next = null // Initialize pointers for the previous and next nodes

    for (let index = 0; index < this.length; index++) {
      // Loop through each node in the list
      next = node.next // Save the reference to the next node
      node.next = prev // Reverse the pointer of the current node to the previous node
      prev = node // Move the previous pointer to the current node
      node = next // Move to the next node
    }

    return this // Return the reversed list
  }
}

let newlist = new singlelinklist() // Create a new single linked list object

// Add nodes to the list
newlist.push('King')
newlist.push('of Kings')
newlist.push('is')
newlist.push('Virat')
newlist.push('KHOLI')

// Insert a node at the beginning of the list
newlist.insertAtPosition('THE', 0)

// Display the list
newlist.showList()

// Output:
// THE -> King
// King -> of Kings
// of Kings -> is
// is -> Virat
// Virat -> KHOLI

/**Time Complexity of Single Linked List Operations:

push: O(1)
pushAtStart: O(1)
deleteStart: O(1)
deleteFromEnd: O(n)
insertAtPosition: O(n)
search: O(n)
getNode: O(n)
removeAtPosition: O(n)
reverse: O(n) */
