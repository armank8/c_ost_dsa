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
    // console.log(head);
    return head;
}

function checkPalindrome(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(slow);
}

function main(input) {
    let N = input.split('\n')[0];
    let values = input.split('\n')[1].split(' ').map(Number);
    console.log(N, values);

    let ll = llCreation(N, values);
    let palin = checkPalindrome(ll);
    console.log(ll);
    console.log(palin);

}


let input = "5\n1 2 3 4 5";
console.log(main(input));