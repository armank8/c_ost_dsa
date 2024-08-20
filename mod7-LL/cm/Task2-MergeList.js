class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function llCreation(input) {
    let head = new ListNode(input[0]);
    let curr = head;

    for (let i = 1; i < input.length; i++) {
        curr.next = new ListNode(input[i]);
        curr = curr.next;
    }
    console.log(head);
    return head;
}

function mergeList(list1, list2) {
    console.log(list1, list2);

    let list = new ListNode(0);
    let curr = list;
    console.log(list);

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1;

            list1 = list1.next;
        } else {
            curr.next = list2;

            list2 = list2.next;
        }
        curr = curr.next;
    }
    if (list1 !== null) {
        curr.next = list1;
    }
    if (list2 !== null) {
        curr.next = list2;
    }
    console.log(list.next);
    return list.next;
}

function printList(head) {
    console.log(head);
    let curr = head;
    let result = [];

    while (curr) {
        result.push(curr.val);
        curr = curr.next;

    }
    console.log(result);
    return result;
}

function main(input) {

    let list1 = llCreation(input[0]);
    let list2 = llCreation(input[1]);
    console.log(list1, list2);

    let merged = mergeList(list1, list2);
    console.log(merged);
    // return merged;

    return printList(merged);
}


let input = [[1, 2, 4], [1, 3, 4]];
console.log(main(input));