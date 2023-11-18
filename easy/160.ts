class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getIntersectionNodeV1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA == headB) return headA

    let itera: ListNode | null = headA
    let iterb: ListNode | null = headB

    while (itera) {
        iterb = headB
        while (iterb) {
            if (itera == iterb) {
                return itera
            }
            iterb = iterb.next
        }
        itera = itera.next
    }

    return null
};

function getIntersectionNodeV2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA == headB) return headA

    let itera: ListNode | null = headA
    let iterb: ListNode | null = headB
    let list: ListNode[] = []
    
    while (itera) {
        list.push(itera)
        itera = itera.next
    }

    while(iterb){
        if(list.includes(iterb)){
            return iterb
        }
        iterb = iterb.next
    }

    return null
};