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

    for (let i = 1; i < K; i++) {
        fast = fast.next;
    }
    console.log(fast);

    while (fast.next !== null) {
        fast = fast.next;
        prev=slow;
        slow = slow.next;
    }
    console.log(fast, slow);
    console.log(prev);

    prev.next = fast;

    console.log(head);

}

function main(input) {
    let N = parseInt(input.split('\n')[0].split(' ')[0]);
    let K = parseInt(input.split('\n')[0].split(' ')[1]);
    let values = input.split('\n')[1].split(' ').map(Number);
    console.log(N, K, values);

    let ll = llCreation(N, values);
    console.log(ll);
    let kth = deleteKth(N, K, ll);
}



let input = "5 5\n1 2 3 4 5";
console.log(main(input));