// // [11==> 3==> 23==> 7==> 4==>null]; Linklist str
// // Under the hood LL looks like below

// let linkedList = [
//   {
//     head: {
//       value: 11,
//       next: {
//         value: 3,
//         next: {
//           value: 23,
//           next: {
//             value: 7,
//             next: {
//               value: 4,
//               next: null,
//             },
//           },
//         },
//       },
//     },
//   },
// ];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    // if there is no item
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if there is 1 or more items
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removing from last

  pop() {
    //if no value is present in LL
    if (!this.head || this.length === 0) return undefined; // if there is no items
    let temp = this.head;
    let pre = this.head;
    //if more than one value is present in LL
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    //if only one value present in LL
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // Adding in the front

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = head;
      this.head = newNode;
    }
    length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value); // inserting at 1st index
    if (index === this.length) this.push(value); // inserting at last index
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    const previousNode = this.get(index - 1);
    const nodeToRemove = previousNode.next;

    previousNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(4);
