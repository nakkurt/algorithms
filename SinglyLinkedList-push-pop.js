function node(val) {
    this.val = val;
    this.next = null
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
  
SinglyLinkedList.prototype.push = function(val) {
    let node = {
       val: val,
       next: null
    }
    if(!this.head){
      this.head = node;
      this.tail = node;
            
    }
    else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
  this.length++;
  return this;
  }

SinglyLinkedList.prototype.pop = function(val) {  
  let current = this.head;
  let temp = current;
  while(current.next){
    temp = current;
    current = current.next;
  }
  this.tail = temp;
  this.tail.next = null;
  return current;
}