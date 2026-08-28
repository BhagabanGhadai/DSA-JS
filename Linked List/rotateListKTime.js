function rotateRight(head, k) {
    if (!head || k === 0) return head;

    // Compute the length of the list and get the last node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Make the list circular
    tail.next = head;

    // Find the new tail: (length - k % length - 1)th node
    // and the new head: (length - k % length)th node
    k = k % length;
    let stepsToNewHead = length - k;
    let newTail = tail;

    while (stepsToNewHead > 0) {
        newTail = newTail.next;
        stepsToNewHead--;
    }

    let newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
}
  