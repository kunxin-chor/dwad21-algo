class Node {
    value = null;
    next = null;

    constructor(data, next=null) {
        this.value = data;
        this.next = next; 
    }

    getValue() {
        return this.value;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }
}

// export Node class that other JavaScript files can use
module.exports = Node;