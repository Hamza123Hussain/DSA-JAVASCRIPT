class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let NewNode = new Node(val)

    if (!this.first) {
      // if no elements in the stacks
      this.first = NewNode
      this.last = NewNode
      this.size++
    } else {
      NewNode.next = this.first
      this.first = NewNode
    }
  }

  pop() {
    if (!this.first) {
      return 'NO DATA IN stacks'
    }
    let temp = this.first
    if (this.first == this.last) {
      // if only one element in the stacks
      this.first = null
      this.last = null
      this.size--
    }

    this.first = temp.next
    temp.next = null

    return `${temp.val} has been removed`
  }
}

let stacks = new Stack()

stacks.push(10)
stacks.push(20)
stacks.push(30)

// stacks.Destacks()
