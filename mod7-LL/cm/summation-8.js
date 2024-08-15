function ListNode(val) {
    this.val = val;
    this.next = null;
}

function main(input) {
    // console.log(input);
    const inputs = input.split('\n');
    let a = inputs[0];
    let b = inputs[1];
    console.log(a, b);

    lenA = a.length;
    lenB = b.length;
    console.log(lenA, lenB);

    if (lenA < lenB) {
        a = a.padStart(lenB, 0)
    } else {
        b = b.padStart(lenA, 0)
    }
    console.log(a);
    console.log(b);
    a = a.split('').reverse();
    b = b.split('').reverse();
    console.log(a);
    console.log(b);
    // console.log(typeof(b));

    let head1 = new ListNode(a[0]);
    let head2 = new ListNode(b[0]);

    let curr1 = head1;
    let curr2 = head2;

    for (let i = 1; i < a.length; i++) {
        curr1.next = new ListNode(a[i])
        curr2.next = new ListNode(b[i])
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    console.log(head1);
    console.log(head2);

    let result = '';
    let sum = 0;
    let carry = 0;

    curr1 = head1;
    curr2 = head2;

    while (curr1 && curr2) {
        sum = parseInt(curr1.val) + parseInt(curr2.val) + carry;
        console.log(sum);

        carry = parseInt(sum % 10);
        console.log(carry);
        
        result += parseInt(sum / 10).toString();
        console.log(result);

        curr1 = curr1.next;
        curr2 = curr2.next;

    }

    if (carry === 1) {
        result += carry;
    }
    console.log(result);




}

// let input = "5555\n1";
let input = "12\n9999";
console.log(main(input));