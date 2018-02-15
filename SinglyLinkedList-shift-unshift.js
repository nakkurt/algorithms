function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.unshift = function (val) {
  //create new node with val -- Nval
  //change head to Nval
  // deal with case when singly was emoty (also assign tail)
  //singly.length++
  //return this
  let node = new Node(val);
  node.next = this.head;
  this.head = node;
  if(this.length === 0) {this.tail = node}
  this.length++;
  return this;
}

SinglyLinkedList.prototype.shift = function() {
  //handle case when singly has no nodes to remove
  // label the current head as removed
  // make second elem become the head
  // remove connection between removed and new head
  //decrement singly length
  if(this.length === 0) {return undefined}
  let removed = this.head;
  this.head = this.head.next;
  removed.next = null;
  this.length--;
  return removed.val;
}



var singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.unshift(5)); // singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5
console.log(singlyLinkedList.unshift(10)); // singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 10
console.log(singlyLinkedList.head.next.val); // 5
console.log(singlyLinkedList.tail.val); // 5
console.log(singlyLinkedList.unshift(15)); // singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 15
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 5
console.log(singlyLinkedList.tail.val); // 5
console.log(singlyLinkedList.shift()); // 15
console.log(singlyLinkedList.head.val) // 10
console.log(singlyLinkedList.tail.val) // 5
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.shift()); // 10
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.shift()); // 5
console.log(singlyLinkedList.length); // 0
console.log(singlyLinkedList.shift()); // undefined
console.log(singlyLinkedList.length); // 0