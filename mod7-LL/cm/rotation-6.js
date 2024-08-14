function ListNode(val) {
    this.val = val;
    this.next = null;
}

function main(input) {
    // console.log(input);
    const inputs = input.split('\n');
    const line1=inputs[0];
    const line2=inputs[1];
    // console.log(line1,line2);

    let N = line1.split(' ')[0];
    let K = line1.split(' ')[1];
    let values = inputs[1].split(' ').map(Number);
    // console.log(N, K, values);

    let head = new ListNode(values[0]);

    let current = head;
    for (let i = 1; i < N; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    // console.log(current);
    // console.log(head);

    for (let i = 0; i < K; i++) {
        temp = head;
        head = head.next;
        temp.next = null;
        current.next = temp
        current = current.next;
    }
    // console.log(head);

    let result = [];
    current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' '));
}


// let input = "52\n12345";
// let input = "4 3\n782 157 858 236";
let input = "4 1\n224 409 276 668 ";
console.log(main(input))