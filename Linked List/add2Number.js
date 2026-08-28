function addTwoNumber(head1,head2){
    const reverseHead1=reverse(head1)
    const reverseHead2=reverse(head2)
    let extra=0
    while(reverseHead1&&reverseHead2){
        let sum=reverseHead1.value+reverseHead2.value+extra
        if(sum>=10){
            reverseHead1.value=sum%10
            extra=Math.floor(sum/10)
        }else{
            reverseHead1.value=sum
            extra=0
        }
        if(!reverseHead1.next && reverseHead2.next){
            reverseHead1.next=reverseHead2.next
            reverseHead2.next=null
        }
        if(!reverseHead2.next && reverseHead1.next){
            reverseHead2.next=null
        }
        if(!reverseHead1.next && !reverseHead2.next && extra>0){
            reverseHead1.next={value:extra,next:null}
            extra=0
        }
        reverseHead1=reverseHead1.next
        reverseHead2=reverseHead2.next
    }
    return reverse(head1)
}

function reverse(head){
    let previous=next=null,current=head
    while(current){
        next=current.next
        current.next=previous
        previous=current
        current =next
    }
    return head
}