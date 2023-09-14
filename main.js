class LinkedList {
    append(value) {
        //add new Node containing(value) to the end of the list
    }

    prepend(value) {
        //add new Node containing(value) to the start of the list
    }

    size() {
        //return number of Nodes in the list
    }

    head() {
        //return first Node of the list
    }

    tail() {
        //return last Node of the list
    }

    at(index) {
        //return the Node at the given index
    }

    pop() {
        //remove last Node of the list
    }

    contains(value) {
        //return true if value is in the list else false
    }

    find(value) {
        //return the index of the Node containing the value or null if its not found
    }

    toString() {
        //represent the LinkedList object as a string //FORMAT: (value) -> (value) -> (value) -> null
    }

    insertAt(value, index) {
        //insert new Node at specific index with the provided value
    }

    removeAt(index) {
        //removes the Node at given index
    }

}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
