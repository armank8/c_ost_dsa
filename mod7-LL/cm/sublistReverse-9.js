class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function llCreation(N, values) {
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

function reverseList(head, m, n) {
    console.log(head, m, n);
    let curr = head;
    let prev = null;
    let next = null;
    let length = 1;
    console.log(length);
    let dummyHead = new ListNode(0);
    let list = dummyHead;
    console.log(dummyHead);

    while (curr.next !== null) {
        console.log(length);
        if (length <= m) {
            list.next = curr;
            list = list.next;
            curr = curr.next;
            console.log(curr);
            console.log(list);
            length++;
        }
        if (length > m && length <= n) {
            console.log(curr);
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            length++;
        }
        if (length > n) {
            list.next=prev;
            while(prev.next!==null){
                prev=prev.next;
            }
            console.log(prev);
            prev.next=curr;
        }
        // curr = curr.next;
    }

    console.log(curr);
    console.log(prev);
    console.log(list);
    return list;

}

// function printList(head) {
//     console.log(head);
//     let curr = head;
//     let result = [];

//     while (curr) {
//         result.push(curr.val);
//         curr = curr.next;

//     }
//     console.log(result.join(' '));
// }

function main(input) {
    const inputs = input.split('\n');
    console.log(inputs);
    const N = parseInt(inputs[0]);
    const values = inputs[1].split(' ').map(Number);
    const m = parseInt(inputs[2].split(' ')[0]);
    const n = parseInt(inputs[2].split(' ')[1]);
    console.log(N, values, m, n);

    let ll = llCreation(N, values);
    console.log(ll);

    let reversed = reverseList(ll, m, n);
    console.log(reversed);

    // printList(reversed);
}


// let input = "5\n1 5 8 6 3\n2 4";
let input = "5\n1 2 3 4 5\n1 3";
console.log(main(input));

// This code is not correct 
// many confusions in this problem and concepts ----- practice more ----