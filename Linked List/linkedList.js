function node(value) {
  this.value = value;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addToFirst = function (value) {
  const newNode = new node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addToLast = function (value) {
  const newNode = new node(value);
  if (!this.head) {
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
};
MyLinkedList.prototype.AddAtIndex = function (index, value) {
  if (index < 0 || index > this.size) return;
  const newNode = new node(value);
  // insert at head
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return;
  }
  let current = this.head;
  let previous = null;
  let count = 0;
  while (count < index) {
    previous = current;
    current = current.next;
    count++;
  }
  newNode.next = current;
  previous.next = newNode;
  this.size++;
};
MyLinkedList.prototype.removeFirst = function () {
  if (!this.head) return;
  this.head = this.head.next;
  this.size--;
};
MyLinkedList.prototype.removeLast = function () {
  if (!this.head) return;
  let current = this.head;
  if (!current.next) {
    this.head = null;
    this.size--;
    return;
  }
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
  this.size--;
};
MyLinkedList.prototype.removeAtIndex = function (index) {
  if (index < 0 || index <= this.size) return;
  let current = this.head;
  if (!current) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  let previous = null;
  let count = 0;
  while (count < index) {
    previous = current;
    current = current.next;
    count++;
  }
  if (current.next) {
    previous.next = current.next;
    this.size--;
  }
};
MyLinkedList.prototype.length = function () {
  let count = 1;
  let current = this.head;
  while (current.next) {
    count++;
    current = current.next;
  }
  return count;
};
MyLinkedList.prototype.print = function () {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};
MyLinkedList.prototype.getByIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  if (!current) return -1;
  let count = 0;
  while (count < index) {
    count++;
    current = current.next;
  }
  return current.value;
};

MyLinkedList.prototype.middleNode = function () {
  if (!this.head) return -1;
  let slowPointer = this.head;
  let fastPointer = this.head;
  while (fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};
MyLinkedList.prototype.reverse=function(){
  let previous=null
  let current=this.head
  let nextNode=null
  while(current!=null){
    nextNode=current.next
    current.next=previous
    previous=current
    current=nextNode
  }
  this.head=previous
}
MyLinkedList.prototype.reverseRecursive=function(){
  const reverseHelper=(current,previous)=>{
    if(current==null){
      this.head=previous
      return
    }
    const nextNode=current.next
    current.next=previous
    reverseHelper(nextNode,current)
  }
  reverseHelper(this.head,null)
}
//floyd's Cycle Detection Algorithm
MyLinkedList.prototype.hasCycle=function(){
  let slowPointer=this.head
  let fastPointer=this.head
  while(fastPointer && fastPointer.next){
    slowPointer=slowPointer.next
    fastPointer=fastPointer.next.next
    if(slowPointer==fastPointer){
      return true
    }
  }
  return false
}
MyLinkedList.prototype.palindrome=function(){
  if(!this.head || !this.head.next) return true
  let slowPointer=this.head
  let fastPointer=this.head
  const stack=[]
  while(fastPointer && fastPointer.next){
    stack.push(slowPointer.value)
    slowPointer=slowPointer.next
    fastPointer=fastPointer.next.next
  }
  if(fastPointer){
    slowPointer=slowPointer.next
  }
  while(slowPointer){
    const topValue=stack.pop()
    if(topValue!==slowPointer.value){
      return false
    }
    slowPointer=slowPointer.next
  } 
  return true
}
MyLinkedList.prototype.palindromeOptimized=function(){
  if(!this.head || !this.head.next) return true
  let slowPointer=this.head
  let fastPointer=this.head
  while(fastPointer && fastPointer.next){
    slowPointer=slowPointer.next
    fastPointer=fastPointer.next.next
  }
  let prev=null
  let current=slowPointer
  while(current){
    const nextNode=current.next
    current.next=prev
    prev=current
    current=nextNode
  }
  let leftPointer=this.head
  let rightPointer=prev
  while(rightPointer){
    if(leftPointer.value!==rightPointer.value){
      return false
    }
    leftPointer=leftPointer.next
    rightPointer=rightPointer.next
  }
  return true
}

MyLinkedList.prototype.createCycle=function(position){
  if(position<0 || position>=this.size) return
  let cycleNode=null
  let current=this.head
  let count=0
  while(current){
    if(count==position){
      cycleNode=current
    }
    if(current.next==null){
      current.next=cycleNode
      return
    }
    current=current.next
    count++
  }
}
MyLinkedList.prototype.removeCycle=function(){
  if(!this.hasCycle()) return
  let slowPointer=this.head
  let fastPointer=this.head
  do{
    slowPointer=slowPointer.next
    fastPointer=fastPointer.next.next
  }while(slowPointer!=fastPointer)
  slowPointer=this.head
  let prev=null
  while(slowPointer!=fastPointer){
    prev=fastPointer
    slowPointer=slowPointer.next
    fastPointer=fastPointer.next
  }
  prev.next=null
}
MyLinkedList.prototype.findNthFromEnd=function(n){
  if(n<=0 || n>this.size) return -1
  let mainPointer=this.head
  let refPointer=this.head
  let count=0
  while(count<n){
    refPointer=refPointer.next
    count++
  }
  while(refPointer){
    mainPointer=mainPointer.next
    refPointer=refPointer.next
  }
  return mainPointer.value
}
MyLinkedList.prototype.mergeSortedLists=function(list1,list2){
  const mergedList=new MyLinkedList()
  let ptr1=list1.head
  let ptr2=list2.head
  while(ptr1 && ptr2){
    if(ptr1.value<ptr2.value){
      mergedList.addToLast(ptr1.value)
      ptr1=ptr1.next
    }else{
      mergedList.addToLast(ptr2.value)
      ptr2=ptr2.next
    }
  }
  while(ptr1){
    mergedList.addToLast(ptr1.value)
    ptr1=ptr1.next
  }
  while(ptr2){
    mergedList.addToLast(ptr2.value)
    ptr2=ptr2.next
  }
  return mergedList
};
const linkedList = new MyLinkedList();
linkedList.addToFirst(10);
// linkedList.addToLast(5);
// linkedList.addToLast(34);
// linkedList.addToLast(78);
// linkedList.AddAtIndex(2, 20);
// linkedList.removeFirst()
// linkedList.removeLast()
// linkedList.removeAtIndex(3)
// linkedList.length()
// linkedList.print();
// console.log(linkedList.getByIndex(3))
// console.log(linkedList.middleNode());
linkedList.reverse()
console.log(linkedList);
