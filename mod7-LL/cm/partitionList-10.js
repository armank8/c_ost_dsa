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

function partition(head,X,N){
    console.log(head,X,N);

    let lessHead = new ListNode(0);
    let greaterHead = new ListNode(0);
    console.log(lessHead, greaterHead);

    let less = lessHead;
    let greater = greaterHead;
    curr = head;
    console.log(less, greater);

    while (curr !== null) {
        if (curr.val < X) {
            less.next = curr;
            less = less.next;
        } else {
            greater.next = curr;
            greater = greater.next;
        }
        curr = curr.next;
    }
    greater.next = null;

    console.log(lessHead);
    console.log(greaterHead);

    less.next = greaterHead.next;

    console.log(lessHead.next);

    return lessHead.next;
}

function printList(head){
    let curr = head;
    let result=[];
    while(curr){
        result.push(curr.val);
        curr=curr.next;
    }
    console.log(result.join(' '));
}

function main(input) {
    console.log(input);
    const inputs = input.split('\n');
    console.log(inputs);
    const N = parseInt(inputs[0]);
    const values = inputs[1].split(' ').map(Number);
    const X = parseInt(inputs[2]);
    console.log(N, values, X);

   let ll = llCreation(N,values);
   console.log(ll);

   let part = partition(ll,X,N);
   console.log(part);

   printList(part);

}

// let input = "5\n5 4 3 2 1\n3";
let input = "3\n3 2 1\n5";
console.log(main(input));
