//brutforce
const getInterSectionNodeBrutforce=function(headA,headB){
    while(headA){
        while(headB){
            if(headA==headB){
                return headA
            }
            headB=headB.next
        }
        headA=headA.next
    }
    return null
}
//optimal
const getInterSectionNodeOptimal=function(headA,headB){
    let set=new Set()
    while(headB){
        set.add(headB)
        headB=headB.next
    }

    while(headA){
        if(set.has(headA)){
            return headA
        }
        headA=headA.next
    }
    return null
}