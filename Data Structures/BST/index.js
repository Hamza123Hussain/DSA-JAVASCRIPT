class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.length = 0
  }

  insert(val) {
    let current = this.root
    let newnode = new Node(val)
    if (!this.root) {
      this.root = newnode
      this.length++
    } else {
      while (true) {
        // runs till return is got
        if (val < current.val) {
          if (current.left === null) {
            current.left = newnode
            this.length++
            return this
          } else {
            current = current.left
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newnode
            this.length++
            return this
          } else {
            current = current.right
          }
        }
      }
    }
    return `${newnode.val} HAS BEEN ADDED TO THE TREE`
  }

  find(val) {
    // Check if the tree is empty
    if (this.root == null) return 'NO NODES IN THE TREE'

    // Check if the root node contains the target value
    if (this.root.val == val) {
      return `${val} FOUND AT ROOT`
    } else {
      let current = this.root // Initialize current node as the root

      // Loop until the target value is found or we reach a leaf node
      while (true) {
        // If the target value is less than the current node's value
        if (val < current.val) {
          current = current.left // Move to the left child

          // Check if the target value is found at the left child
          if (val == current.val) {
            return 'NODE HAS BEEN FOUND AT THE LEFT OF ROOT'
          } else {
            // If not found, check if the target value is greater than the current node's value
            if (val > current.val) {
              current = current.right // Move to the right child

              // Check if the target value is found at the right child
              if (val == current.val) {
                return 'NODE FOUND AT RIGHT'
              }
            } else {
              current = current.left // Move to the left child

              // Check if the target value is found at the left child
              if (val == current.val) {
                return 'NODE FOUND AT LEFT'
              }
            }
          }
        } else {
          current = current.right // Move to the right child

          // Check if the target value is found at the right child
          if (val == current.val) {
            return 'NODE HAS BEEN FOUND AT THE RIGHT OF ROOT '
          } else {
            // If not found, check if the target value is greater than the current node's value
            if (val > current.val) {
              current = current.right // Move to the right child

              // Check if the target value is found at the right child
              if (val == current.val) {
                return 'NODE FOUND AT RIGHT OF THE RIGHT NODE OF ROOT'
              }
            } else {
              current = current.left // Move to the left child

              // Check if the target value is found at the left child
              if (val == current.val) {
                return 'NODE FOUND AT LEFT OF THE RIGHT NODE OF ROOT'
              }
            }
          }
        }
      }
    }
  }

  //simplied version of finding nodes
  findoptimized(val) {
    // Check if the tree is empty
    if (this.root == null) return 'NO NODES IN THE TREE'

    let current = this.root // Initialize current node as the root

    // Loop until current node is null (reached a leaf node)
    while (current) {
      // Check if the target value is found at the current node
      if (val === current.val) {
        return `NODE FOUND AT ${
          current === this.root
            ? 'ROOT'
            : current === this.root.left
            ? 'LEFT OF ROOT'
            : 'RIGHT OF ROOT'
        }`
      }

      // Move to the left child if the target value is less than the current node's value
      if (val < current.val) {
        current = current.left
      }
      // Move to the right child if the target value is greater than the current node's value
      else {
        current = current.right
      }
    }

    // If the target value is not found in the tree
    return 'NODE NOT FOUND'
  }
}

let tree = new BST()

tree.insert(22)
tree.insert(25)
tree.insert(24)
tree.insert(30)
tree.insert(35)
tree.insert(29)
tree.insert(20)
tree.insert(21)
tree.insert(19)
tree.insert(17)
tree.insert(18)
console.log(tree.find(35))
console.log(tree.findoptimized(35))

console.log(tree)
