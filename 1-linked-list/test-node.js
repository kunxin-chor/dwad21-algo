const Node = require('./Node');

const n1 = new Node(11);
const n2 = new Node(13);
const n3 = new Node(15);


n1.setNext(n2);
n2.setNext(n3);
console.log(n1, n2, n3);