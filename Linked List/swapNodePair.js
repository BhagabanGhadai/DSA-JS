function Node(){
    this.value=0
    this.link=null
}
function swapNodePair(head){
    let dummy=new Node()
    dummy.next=head

    let p=dummy
    let c=head
    let n=head.next

    while(c&&n){
        p.next=n;
        c.next=n.next
        n.next=c

        p=c
        c=p.next
        n=c&&c.next
    }

    return dummy.next
}