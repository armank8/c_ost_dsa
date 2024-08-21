class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function llCreation(N,values) {
    if (N === 0) return null;
    let head = new ListNode(values[0]);
    let curr = head;

    for (let i = 1; i < N; i++) {
        curr.next = new ListNode(values[i]);
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
    console.log(result.join(' '));
}

function main(input) {
    const inputs = input.split('\n');
    const N = parseInt(inputs[0]);
    const values = inputs[1].split(' ').map(Number);
    console.log(N, values);

   let ll = llCreation(N,values);
   console.log(ll);

    let reversed = reverseList(ll);
    console.log(reversed);

    printList(reversed);
}


let input = "5\n1 2 3 4 5";
console.log(main(input));