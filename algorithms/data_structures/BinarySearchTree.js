/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class Node {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     */
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(h) linear, h = height of left sub tree starting from current node.
   * - Space: O(1) constant.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (current === null) {
      return null;
    }

    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(h) linear, h = height of left sub tree starting from current node.
   * - Space: O(1) constant.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (current === null) {
      return null;
    }

    if (current.left === null) {
      return current.data;
    }
    return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(h) linear, h = height of right sub tree starting from current node.
   * - Space: O(1) constant.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (current === null) {
      return null;
    }

    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(h) linear, h = height of right sub tree starting from current node.
   * - Space: O(1) constant.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (current === null) {
      return null;
    }

    if (current.right === null) {
      return current.data;
    }
    return this.maxRecursive(current.right);
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(h) linear, h = height of tree.
   * - Space: O(1) constant.
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    let current = this.root;

    while (current) {
      if (current.data === searchVal) {
        return true;
      }

      if (searchVal < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(h) linear, h = height of tree.
   * - Space: O(1) constant.
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.data === searchVal) {
      return true;
    }

    if (searchVal < current.data) {
      return this.containsRecursive(searchVal, current.left);
    }

    if (searchVal > current.data) {
      return this.containsRecursive(searchVal, current.right);
    }
  }

  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(rightHeight + leftHeight) -> still linear so simplify to O(h).
   * - Space: O(1) constant.
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
  range(startNode = this.root) {
    if (!startNode) {
      return null;
    }
    return this.max(startNode) - this.min(startNode);
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(h) linear, h = height of tree because the new node may have to
   *    be added at the bottom.
   * - Space: O(1) constant.
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
    const node = new Node(newVal);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (newVal <= current.data) {
          if (!current.left) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else {
          // newVal is greater than current.data
          if (!current.right) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(h) linear, h = height of tree because the new node may have to
   *    be added at the bottom.
   * - Space: O(1) constant.
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) {
    if (this.isEmpty()) {
      this.root = new Node(newVal);
      return this;
    }

    if (newVal > curr.data) {
      if (curr.right === null) {
        curr.right = new Node(newVal);
        return this;
      }
      return this.insertRecursive(newVal, curr.right);
    }

    if (curr.left === null) {
      curr.left = new Node(newVal);
      return this;
    }
    return this.insertRecursive(newVal, curr.left);
  }

  /**
   * DFS Preorder: (Parent, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(node = this.root, vals = []) {
    if (node) {
      vals.push(node.data);
      this.toArrPreorder(node.left, vals);
      this.toArrPreorder(node.right, vals);
    }
    return vals;
  }

  /**
   * DFS Inorder: (Left, Parent, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (node) {
      this.toArrInorder(node.left, vals);
      vals.push(node.data);
      this.toArrInorder(node.right, vals);
    }
    return vals;
  }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);
