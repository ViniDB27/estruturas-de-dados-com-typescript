class QueuePriority {
    private _items: QueueElement[] = [];

    public enqueue(element: string, priority: number) {
        const queueElement = new QueueElement(element, priority);
        let added = false;

        for (let i = 0; i < this._items.length; i++ ) {
            if (queueElement.priority < this._items[i].priority) {
                this._items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this._items.push(queueElement);
        }

    }

    public  dequeue(): QueueElement {
        return this._items.shift();
    }

    public front() {
        return this._items[0];
    }

    public  isEmpty(): boolean {
        return this._items.length === 0;
    }

    public size() {
        return this._items.length;
    }

    public print() {
        for (const item of this._items) {
            console.log(item.name);
        }
    }

}


class QueueElement {
    constructor(
        public readonly name: string,
        public readonly priority: number,
    ) { }
}

const queue = new QueuePriority();

queue.enqueue("Pessoa 1", 5);
queue.enqueue("Pessoa 2", 1);
queue.enqueue("Pessoa 3", 4);
queue.enqueue("Pessoa 4", 6);
queue.enqueue("Pessoa 5", 3);
queue.enqueue("Pessoa 6", 2);
queue.enqueue("Pessoa 7", 7);

queue.print();

console.log("===========================================");

queue.dequeue();
queue.print();

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());