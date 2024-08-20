class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function llCreation(input) {
    if (input.length === 0) return null;
    let head = new ListNode(input[0]);
    let curr = head;

    for (let i = 1; i < input.length; i++) {
        curr.next = new ListNode(input[i]);
        curr = curr.next;
    }
    console.log(head);
    return head;
}

function reverseList(head) {
    console.log(head);
    let curr = head;
    let prev = null;
    let next = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    console.log(prev);
    return prev;

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
    let ll = llCreation(input);
    console.log(ll);

    let reversed = reverseList(ll);
    console.log(reversed);
    return printList(reversed);
}


let input = [1, 2, 3, 4, 5];
console.log(main(input));