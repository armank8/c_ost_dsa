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

function checkPalindrome(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(fast);

    console.log(slow);

    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;

    }
    console.log(prev);

    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;


}

function nonDecreasing(head) {
    let curr = head;
    let prevVal = 0;

    while (curr) {
        console.log(prevVal);
        if (curr.val >= prevVal) {
            prevVal = curr.val;
            curr = curr.next
        } else {
            return false;
        }

    }
    return true;
}

function main(input) {
    let N = input.split('\n')[0];
    let values = input.split('\n')[1].split(' ').map(Number);
    console.log(N, values);

    let ll = llCreation(N, values);
    // let palin = checkPalindrome(ll);
    let non = nonDecreasing(ll);
    if (non) {
        console.log("YES")
    } else {
        console.log("NO");
    }
    console.log(non);
    console.log(ll);
    // console.log(palin);

}


// let input = "5\n1 2 3 4 5";
// let input = "5\n1 7 3 7 1";
let input = "5\n1 3 3 6 7";
// let input = "3\n1 7 3";
console.log(main(input));