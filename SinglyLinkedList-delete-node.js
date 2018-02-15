//Define Node obj
function Node(data){
  this.data = data;
  this.next = null;
}

//Define SinglyList obj
function SinglyList(){
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(val){
  var node = new Node(val),
      currentNode = this.head;

      //If empty, build as first node
      if(!currentNode){
        this.head = node;
        this._length++;
        return;
      }

      //iterate over until end of list
      while(currentNode.next){
        currentNode = currentNode.next;
      }

      //add/append new node
      currentNode.next = node;
      this._length++;

      return node;
};

SinglyList.prototype.remove = function(index){
  var currentNode = this.head, count=0, previous;
  //if empty, exit out
  if(this._length===0) return;

  //Check against first node
  if(index===0){
      this.head = currentNode.next;
      this._length--;
  }else{

      while(count<index-1){
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }//end while

      previous.next = currentNode.next;
      this._length--;

      return this.head;
  }// end if

};

var singlyList = new SinglyList();

singlyList.add(1);
singlyList.add(2);
singlyList.add(3);
singlyList.add(4);
singlyList.add(5);
singlyList.add(6);
singlyList.add(7);
singlyList.add(8);
singlyList.add(9);
singlyList.add(10);
singlyList.remove(5)
