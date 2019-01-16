// Linked list, have a head and tail property
// A linked-List 'head' points to the last node and 'tail' points to the first node.
// node variables properties: ('value', 'next', 'prev')

// Contractuctor functions variable name start with a Caps leter


// linkedList constructor function
function LinkedList(){
    this.head = null;
    this.tail = null;
}


// node constructor function
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}


// prototype method = addToHead
LinkedList.prototype.addToHead = function(value) {
    // newNode variable from our Node constructor function
    var newNode = new Node(value, this.head, null);
    // if linkedList has head = set to prev to newNode
    if (this.head) this.head.prev = newNode;
    // else set linkedList tail to newNode
    else this.tail = newNode;
    // set new-node = newNode
    this.head = newNode;
};


// new node variable instance 
var node1 = new Node(100, 'node2', null);

console.log(node1);
