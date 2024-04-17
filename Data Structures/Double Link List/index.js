class Node {
  constructor(val) {
    this.val = val // Value of the node
    this.next = null // Pointer to the next node in the list
    this.prev = null // Pointer to the previous node in the list
  }
}

class doublelinklist {
  constructor() {
    this.head = null // Pointer to the first node in the list (initially null)
    this.tail = null // Pointer to the last node in the list (initially null)
    this.length = 0 // Number of nodes in the list (initially 0)
  }

  // Method to add a new node to the end of the list
  push(val) {
    let node = new Node(val) // Create a new node with the given value

    if (this.head == null) {
      // If the list is empty
      this.head = node // Set both head and tail to the new node
      this.tail = node
    } else {
      node.prev = this.tail // Set the previous pointer of the new node to the current tail
      this.tail.next = node // Set the next pointer of the current tail to the new node
      this.tail = node // Update the tail pointer to the new node
    }

    this.length++ // Increment the length of the list

    return this // Return the modified list
  }

  // Method to add a new node to the beginning of the list
  insertAtStart(val) {
    let node = new Node(val) // Create a new node with the given value

    if (this.head == null) {
      // If the list is empty
      this.head = node // Set both head and tail to the new node
      this.tail = node
    } else {
      node.next = this.head // Set the next pointer of the new node to the current head
      this.head.prev = node // Set the previous pointer of the current head to the new node
      this.head = node // Update the head pointer to the new node
    }

    this.length++ // Increment the length of the list

    return this // Return the modified list
  }

  // Method to remove the last node from the list
  removeFromEnd() {
    if (!this.head) {
      // If the list is empty
      return 'NO DATA IN THE LIST'
    }

    if (!this.head.next) {
      // If there's only one element in the list
      this.head = null // Set both head and tail to null
      this.tail = null
    } else {
      this.tail = this.tail.prev // Update the tail pointer to the second-to-last node
      this.tail.next = null // Set the next pointer of the new tail to null
    }

    this.length-- // Decrement the length of the list
  }

  // Method to remove the first node from the list
  removeFromStart() {
    if (!this.head) {
      // If the list is empty
      return 'NO DATA IN THE LIST'
    }

    if (!this.head.next) {
      // If there's only one element in the list
      this.head = null // Set both head and tail to null
      this.tail = null
    } else {
      this.head = this.head.next // Update the head pointer to the second node
      this.head.prev = null // Set the previous pointer of the new head to null
    }

    this.length-- // Decrement the length of the list
  }

  // Method to get the node at a specified position in the list
  getNode(index) {
    if (index < 0 || index > this.length) {
      // Check for invalid index
      return 'VALUE OUT OF BOUND'
    }

    let current, counter

    if (index <= this.length / 2) {
      // If the index is in the first half of the list
      current = this.head // Start from the head of the list
      counter = 0 // Initialize the counter

      while (counter < index) {
        // Loop until the counter reaches the specified index
        current = current.next // Move to the next node
        counter++ // Increment the counter
      }
    } else {
      // If the index is in the second half of the list
      current = this.tail // Start from the tail of the list
      counter = this.length - 1 // Initialize the counter

      while (counter > index) {
        // Loop until the counter reaches the specified index
        current = current.prev // Move to the previous node
        counter-- // Decrement the counter
      }
    }

    // Display the node and its neighbors
    console.log(
      `${current.prev == null ? 'I AM THE HEAD' : current.prev.val} <- ${
        current.val
      } -> ${current.next == null ? 'I AM THE TAIL' : current.next.val}`
    )

    return current // Return the node at the specified index
  }

  // Method to set the value of the node at a specified position in the list
  setNode(index, value) {
    let current = this.getNode(index) // Get the node at the specified index

    current.val = value // Update the value of the node

    // Display the node and its neighbors after updating the value
    //     console.log(
    //       `${current.prev == null ? 'I AM THE HEAD' : current.prev.val} <-

    //  ${current.val} -> ${current.next == null ? 'I AM THE TAIL' : current.next.val}`
    //     )

    return current // Return the updated node
  }
  showList() {
    let current = this.head // Start from the head of the list

    while (current) {
      // Loop until the current node is null

      // If the current node has a next node
      console.log(
        `${current.prev ? current.prev.val : 'I am head'}    <- ${
          current.val
        } -> ${current.next ? current.next.val : 'I am tail'}`
      ) // Display the current node's value and the value of its next node

      current = current.next // Move to the next node
    }
  }
  insertatposition(index, val) {
    if (index < 0 || index > this.length) return 'out of range position'
    let newnode = new Node(val)

    if (this.head == null) {
      this.head = newnode
      this.tail = newnode
    }

    if (index == this.length) {
      this.push(val)
    }

    if (index == 0) {
      this.insertAtStart(val)
    }
    let prev = this.getNode(index - 1)
    let current = this.getNode(index)

    newnode.next = current
    prev.next = newnode
    newnode.prev = prev
    current.prev = newnode
    this.length++
    console.log(prev, current)
  }

  removenodeatpostion(index) {
    if (index < 0 || index > this.length) return 'out of range position'
    if (this.head == null) {
      return 'Empty List'
    }
    if (!this.head.next) {
      this.head = null
      this.tail = null
    }
    if (index == 0) {
      this.removeFromStart()
    } else if (index == this.length - 1) {
      this.removeFromEnd()
    } else {
      let prevnode = this.getNode(index - 1)
      let targetnode = this.getNode(index)
      let afternode = this.getNode(index + 1)
      prevnode.next = afternode
      afternode.prev = prevnode
      targetnode.next = null
      targetnode.prev = null
      this.length--

      console.log(prevnode, targetnode, afternode)
    }
  }
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
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let prev = null
    let next
    while (node !== null) {
      next = node.next
      node.next = prev
      node.prev = next
      prev = node
      node = next
    }
  }
}

let newlist = new doublelinklist() // Create a new double linked list object

// Add nodes to the list
// newlist.push(10)
// newlist.push(20)
// newlist.push(202)
// newlist.insertAtStart(9)
// newlist.push(2220)

// // Get and display the node at index 4
// // newlist.getNode(4)

// newlist.insertatposition(2, 1212)

newlist.push(10)
newlist.push(20)
newlist.push(30)
newlist.reverse()
newlist.showList()

// newlist.removenodeatpostion(3)
// Set the value of the node at index 4 to 256

// Time Complexity of Double Linked List Operations:
// - **push**: O(1)
// - **insertAtStart**: O(1)
// - **removeFromEnd**: O(1)
// - **removeFromStart**: O(1)
// - **getNode**: O(n)
// - **setNode**: O(n)
