/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @return {ListNode}
*/
var insertGreatestCommonDivisors = function (head) {
    let iter = head
    while (iter.next) {
        let x = findGreatestCommonDivisor(iter.val, iter.next.val)

        iter.next = new ListNode(x, iter.next)

        iter = iter.next.next
    }
    return head
};


const findGreatestCommonDivisor = (a, b) => {
    if (a == b) return a

    let smallestNumber = a < b ? a : b

    while (true) {
        if (a % smallestNumber === 0 && b % smallestNumber === 0) {
            return smallestNumber
        } else {
            smallestNumber = smallestNumber - 1
        }
    }
}

const findGreatestCommonDivisorRecursive = (a, b) => {
    if (!b) {
        return a
    }
    return findGreatestCommonDivisorRecursive(b, a % b)
}

console.log(findGreatestCommonDivisorRecursive(200, 51))
