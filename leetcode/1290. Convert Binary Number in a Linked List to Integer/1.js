
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    ret = 0;
    while(head){
        ret = ret << 1;
        ret += head.val;
        head = head.next;
    }
    return ret;
};


let a = new ListNode(1)
let b = new ListNode(0)
let c = new ListNode(1)
let d = new ListNode(1)

a.next = b
b.next = c
c.next = d

console.log(getDecimalValue(a))

