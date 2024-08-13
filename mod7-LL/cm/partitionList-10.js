function ListNode(val) {
    this.val = val;
    this.next = null
}

function main(input) {
    console.log(input);
    const inputs = input.split('\n');
    console.log(inputs);
    const N = parseInt(inputs[0]);
    const values = inputs[1].split(' ').map(Number);
    const X = parseInt(inputs[2]);
    console.log(N, values, X);

    // creating LL
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < N; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    return head;

}

let input = "5\n5 4 3 2 1\n3";
console.log(main(input));

console.log(new ListNode(5))
console.log(new ListNode(4));