class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  Enqueue(val) {
    let NewNode = new Node(val)

    if (!this.first) {
      // if no elements in the queue
      this.first = NewNode
      this.last = NewNode
      this.size++
    } else {
      this.last.next = NewNode //assign newnode to the next of previou tail
      this.last = NewNode // newnode is the tail
      this.last.next = null //making next of new node null
      this.size++
    }
  }

  Dequeue() {
    if (!this.first) {
      return 'NO DATA IN QUEUE'
    }

    let temp = this.first

    if (this.first == this.last) {
      // if only one element in the queue
      this.first = null
      this.last = null
      this.size--
    }

    this.first = temp.next // assigning the head of the line to the node after the prevous head

    temp.next = null // removing the previous head

    this.size--

    return `${temp.val} has been removed`
  }
}

let QUEUE = new Queue()

QUEUE.Enqueue(10)
QUEUE.Enqueue(20)
QUEUE.Enqueue(30)

// QUEUE.Dequeue()
