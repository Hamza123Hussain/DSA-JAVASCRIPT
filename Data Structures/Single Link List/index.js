class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static ShowPoints(P1, P2) {
    // static method are only accesiable by the class and not its objects
    console.log(`POINT X OF P1 ${P1.x} && POINT X OF P2 ${P2.x}`)
  }
}

let p1 = new Point(2, 3)
let p2 = new Point(4, 3)

// Point.ShowPoints(p1, p2)

// SINGLE LINK LIST

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class singlelinklist {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val) // Create a new node

    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode
      this.tail = newNode
    } else {
      // Otherwise, append the new node to the end of the list
      this.tail.next = newNode
      this.tail = newNode // Update the tail to point to the new node
    }

    this.length++ // Increment the length of the list
    return this // Return the modified list
  }
}

let newlist = new singlelinklist()
// console.log(newlist.push('hello'))
// console.log(newlist.push('hii'))
