// lc-21-Merge two-sorted-lists


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let curr= dummy;

    while(list1 !== null && list2!==null){
        if(list1.val<list2.val){
            curr.next=list1;
            list1=list1.next;
        }else{
            curr.next=list2;
            list2=list2.next;
        }
        curr=curr.next;
    }

    curr.next = list1 !== null ? list1 : list2;
    return dummy.next;
};

class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next = next;
    }
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(5)));

let mergedList = mergeTwoLists(list1, list2);

function printList(head){
    let res=[];
    while(head !== null){
        res.push(head.val);
        head=head.next;
    }
    console.log(res.join(" -> "));
}
printList(mergedList);