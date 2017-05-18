//write class (blueprint) for Node

function Node(val){
  this.val = val;
  this.next = null;
}

//wirte class (blueprint) for singly linked list

function SLL(){
  this.head = null;
  //inside sll blueprint and methods
  this.insert = function(val){
    //handle new or empty list
    if(!this.head){//if head is not pointing to a node, do something (if this.head == null ,do something)
      this.head = new Node(val)//pointing the head to a new Node
      return this.head //once this.head is pointing to the new Node, return this.head
    }
    // handle list with stuff in it
    var current = this.head// set current variable to this.head
    while(current.next){//while current node has a next
      current = current.next // set current to the next node

    }//leave while loop, when current no longer has a next
    console.log("current", current)//current is now the last node
    current.next = new Node(val); // set current's next pointer to a newly created node
    return this.head

  }
}
var list1 = new SLL() //create the new list1
list1.insert(1)//insert a node with val of 1 into newly created list
list1.insert(2)//insert a node with val of 2 into newly created list
list1.insert(3)//insert a node with val of 3 into newly created list
list1.insert(4)//insert a node with val of 4 into newly created list

console.log(list1)



//*Every instance of this is whatever variable is created for what you call the function eg. var list1 = new SSL () list1.insert(4), this is reffering to list1
