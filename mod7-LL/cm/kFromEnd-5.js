class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function llCreation(N, values) {
    let head = new ListNode(values[0]);
    let curr = head;

    for (let i = 1; i < N; i++) {
        curr.next = new ListNode(values[i]);
        curr = curr.next;
    }
    console.log(head);
    return head;
}

function deleteKth(N, K, head) {
    console.log(N, K, head);

    let slow = head;
    let fast = head;
    let prev = null;
    // let curr

    for (let i = 0; i < K; i++) {
        fast = fast.next;
    }
    console.log(fast);

    if (!fast) {
        return head.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

   

    console.log(fast, slow);

    slow.next = slow.next.next;

    console.log(head);
    return head;

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
    let N = parseInt(input.split('\n')[0].split(' ')[0]);
    let K = parseInt(input.split('\n')[0].split(' ')[1]);
    let values = input.split('\n')[1].split(' ').map(Number);
    console.log(N, K, values);

    let ll = llCreation(N, values);
    console.log(ll);
    let kth = deleteKth(N, K, ll);
    console.log(kth);

    printList(kth);

}



let input = "5 2\n1 2 3 4 5";
console.log(main(input));