class LinkedList {
    public length: number = 0;
    public head?: LinkedListNode;

    public append(element: LinkedListNode) {
        let current: LinkedListNode;

        if (!this.head) {
            this.head = element;
        } else  {
            current = this.head;

            while (current?.next) {
                current = current.next;
            }

            current.next = element;
        }

        this.length += 1;
    }

    public insert(element: LinkedListNode, position: number) {
        if (position >= 0 && position <= this.length) {
            let current = this.head;
            let previus: LinkedListNode;

            let index = 0;

            if (position === 0) {
                element.next = current;
                this.head = element;
            } else {
                while (index++ < position) {
                    previus = current;
                    current = current.next;
                }

                element.next = current;
                previus.next = element;
            }
        }
    }

    public removeAt(position: number) {
        if (position > -1 && position < this.length) {
            let current = this.head;
            let previus: LinkedListNode;

            let index = 0;

            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previus = current;
                    current = current.next;
                }

                previus.next = current.next;
            }


            this.length =- 1;
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
    constructor(name: string, next?: LinkedListNode) {
        this.name = name;
        this._next = next;
    }

    get next() {
        return this._next;
    }

    set next(value: LinkedListNode) {
        this._next = value;
    }

}


const list = new LinkedList();

list.append(new LinkedListNode("Pessoa 1"));
list.append(new LinkedListNode("Pessoa 2"));
list.append(new LinkedListNode("Pessoa 3"));
list.append(new LinkedListNode("Pessoa 4"));
list.append(new LinkedListNode("Pessoa 5"));

list.print();

list.removeAt(2);

list.print();