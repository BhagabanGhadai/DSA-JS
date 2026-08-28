function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeLinkedListElements(head,value){
    const node=new ListNode()
    node.next=head

    let previous=node
    while(previous){
        if(previous.next.val===value){
            previous.next=previous.next.next
            continue
        }else{

        previous=previous.next
        }
    }
    return node.next
}