const Node = require('./Node');
class LinkedList {
    // store the first node in the list
    head = null;

    push(newNode) {
        // if the linked list is empty
        // (i.e this.head is null),
        // the newNode will become the head
        if (this.head == null) {
            this.head = newNode;
        } else {
            // point current to head first
            let current = this.head;
            // if the current node has a next node
            // (stop at the last node)
            while (current.getNext() != null) {
                // advance current to the next node
                current = current.getNext();
            }
            // by the end of the while loop, current
            // will be pointing to the last node
            current.setNext(newNode);
        }
       
    }

    print() {
        let current = this.head;
        // we want to go past the last node
        while (current != null) {
            console.log(current.getValue());
            current = current.getNext();
        }
    }
    
    deleteAt(index) {
        // we are deleting the first item
        // aka the head
        if (index==0) {
            this.head = this.head.getNext();
        } else if (index > 0){
            let current = this.head;
            // stop at the node BEFORE what we want to delete
            for (let i =0; i < index-1; i++) {
                current = current.getNext();
            }
            // at the end of the for loop,
            // current will be at node BEFORE the one we want to delete
            // current.setNext(current.getNext().getNext());
            const nodeToDelete = current.getNext();
            // set the current's next node to the next of what we want to delete
            current.setNext(nodeToDelete.getNext());
        }
    }

    insertAt(index, newNode) {
        if (index ==0) {
            // set the next of the new node to be the current head
            // (so the link can be preserved)
            newNode.setNext(this.head);

            // the new node will be the new header
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i =0; i < index -1; i++) {
                current = current.getNext();
            }
            // current will be at the node before where want to insert
            newNode.setNext(current.getNext());
            current.setNext(newNode);
        }
    }
}

module.exports = LinkedList;