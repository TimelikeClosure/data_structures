
var linkedList = new DoublyLinkedList();
linkedList.appendLink();
linkedList.appendLink();
linkedList.appendLink();
linkedList.logStatus();
linkedList.insertLink(linkedList.head);
linkedList.insertLink(linkedList.current);
linkedList.logStatus();
console.log("Old head: ", linkedList.head.next);
console.log("Old current.previous: ", linkedList.current.previous.previous);
linkedList.removeLink(linkedList.head.next);
linkedList.removeLink(linkedList.current.previous);
linkedList.logStatus();
