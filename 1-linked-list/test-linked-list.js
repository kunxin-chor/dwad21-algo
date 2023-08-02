const LinkedList = require('./LinkedList');
const Node = require('./Node');

const linkedList = new LinkedList();
linkedList.push(new Node(11));
linkedList.push(new Node(12));
linkedList.push(new Node(13));

linkedList.print();