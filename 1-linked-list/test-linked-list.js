const LinkedList = require('./LinkedList');
const Node = require('./Node');

const linkedList = new LinkedList();
linkedList.push(new Node(11));
linkedList.push(new Node(12));
linkedList.push(new Node(13));
linkedList.push(new Node(14));
linkedList.push(new Node(15));
linkedList.push(new Node(16));

linkedList.print();


console.log();
console.log("After linkedList.deleteAt(0):");
linkedList.deleteAt(0);
linkedList.print();

console.log();
console.log("After linkedList.deleteAt(2):");
linkedList.deleteAt(2);
linkedList.print();

console.log();
console.log("After linkedList.insertAt(0, new Node(99)):");
linkedList.insertAt(0, new Node(99));
linkedList.print();

console.log();
console.log("After linkedList.insertAt(2, new Node(-100)):");
linkedList.insertAt(2, new Node(-100));
linkedList.print();