class DoublyLinkedList {
    public length: number = 0;
    public head?: LinkedListNode;
    public tail?: LinkedListNode;

    public append(element: LinkedListNode) {
        this.insert(element, this.length);
    }

    public insert(element: LinkedListNode, position: number) {
        if (position >= 0 && position<= this.length) {
            let current = this.head;
            let previus: LinkedListNode;
            let index = 0;

            if (position === 0) {
                if (!this.head) {
                    this.head = element;
                    this.tail = element;
                } else {
                    element.next = current;
                    current.prev = element;
                    this.head = element;
                }
            } else if (position === this.length -1) {
                current = this.tail;
                current.next = element;
                element.prev = current;
                this.tail = element;
            } else {
                while (index++ < position) {
                    previus = current;
                    current = current.next;
                }

                element.next = current;
                previus.next = element;
                current.prev = current.next;
                element.prev = previus;
            }

            this.length += 1;
        }
    }

    public removeAt(position: number) {
        if (position > -1 && position < this.length) {
            let current = this.head;
            let previus: LinkedListNode;
            let index = 0;

            if (position === 0) {
                this.head = current.next;

                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if(position === this.length) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < position) {
                    previus = current;
                    current = current.next
                }
                previus.next = current.next;
                current.next.prev = previus;
            }

            this.length -= 1;
            return current;
        }
    }

    public remove(element: LinkedListNode) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    public indexOf(element: LinkedListNode) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (element.name === current.name) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    public isEmpty(element: LinkedListNode) {
        return this.length === 0;
    }

    public size(element: LinkedListNode) {
        return this.length;
    }

    public  getHead() {
        return this.head;
    }

    public toString(): string {
        let current: LinkedListNode = this.head;
        let string = "";

        while (current) {
            string += `${current.name}, `
            current = current.next;
        }

        return string;
    }

    public print() {
        console.log(this.toString().trim())
    }

}


class LinkedListNode {

    public readonly name: string;
    public _next?: LinkedListNode;
    public _prev?: LinkedListNode;
    constructor(name: string, next?: LinkedListNode, prev?: LinkedListNode) {
        this.name = name;
        this._next = next;
        this._prev = prev;
    }

    get next() {
        return this._next;
    }

    set next(value: LinkedListNode) {
        this._next = value;
    }

    get prev() {
        return this._prev;
    }

    set prev(value: LinkedListNode) {
        this._prev = value;
    }

}


const list = new DoublyLinkedList();

list.append(new LinkedListNode("Pessoa 1"));
list.append(new LinkedListNode("Pessoa 2"));
list.append(new LinkedListNode("Pessoa 3"));
list.append(new LinkedListNode("Pessoa 4"));
list.append(new LinkedListNode("Pessoa 5"));

list.print();

list.removeAt(2);

list.print();