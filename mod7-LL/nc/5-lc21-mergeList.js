
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeList(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    console.log(current);
    
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));


console.log(mergeList());

console.log(list1);
console.log(list2);