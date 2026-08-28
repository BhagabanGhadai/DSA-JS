function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
    const dummyNode=new ListNode()
    dummyNode.next=head
    let previous=dummyNode
    let length=0
    while(head){
        length++
        head=head.next
    }
    let previousPosition=length-n
    let count=0
    while(count<previousPosition){
        previous=previous.next
        count++
    }
    previous.next=previous.next.next
    return dummyNode.next
}

function removeNthFromEnd(head, n) {
    const dummyNode = new ListNode();
    dummyNode.next = head;

    let fast = dummyNode;
    let slow = dummyNode;

    // Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches end
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from end
    slow.next = slow.next.next;

    return dummyNode.next;
}
