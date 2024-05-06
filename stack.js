const LinkedList = require("./linked-list");
/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.push(val);
    this.first = this._list.tail;
    this.last = this._list.head;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error("Cannot pop from an empty stack.");
    }
    let val = this._list.pop();
    this.first = this._list.tail;
    this.last = this._list.head;
    this.size--;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
