function ListNode(val) {
    this.val = val;
    this.next = null;
}

function main(input) {
    // console.log(input);
    const inputs = input.split('\n');
    const N = inputs[0];
    let values = inputs[1].split(' ').map(Number);

    // console.log(N, values);

    let head = new ListNode(values[0]);

    let current = head;
    for (let i = 1; i < N; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    // console.log(current);
    // console.log(head);

    let hash = {};
    let prev = null;

    curr = head;
    for (let i = 0; i < N; i++) {
        if (hash[curr.val]) {
            prev.next = curr.next;
        } else {
            hash[curr.val] = (hash[curr.val] | 0) + 1;
            prev = curr;
        }
        curr = curr.next;
    }
    // console.log(hash);
    // // console.log(head);

    let result = [];
    current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' '));
}


let input = "5\n1 2 1 3 2";

console.log(main(input))