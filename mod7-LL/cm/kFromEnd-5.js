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


function main(input) {
    let N = parseInt(input.split('\n')[0].split(' ')[0]);
    let K = parseInt(input.split('\n')[0].split(' ')[1]);
    let values = input.split('\n')[1].split(' ').map(Number);
    console.log(N,K, values);

    let ll = llCreation(N, values);
}



let input = "5 2\n1 2 3 4 5";
console.log(main(input));