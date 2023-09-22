class Queue {
    private _items: QueueItem[] = [];

    public enqueue(item: QueueItem): number {
        return this._items.push(item);
    }

    public  dequeue(): QueueItem {
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

class QueueItem {
    constructor(
        public readonly name: string
    ) { }
}

const queue = new Queue();

const queueItem1 = new QueueItem("Pessoa 1");
const queueItem2 = new QueueItem("Pessoa 2");
const queueItem3 = new QueueItem("Pessoa 3");
const queueItem4 = new QueueItem("Pessoa 4");
const queueItem5 = new QueueItem("Pessoa 5");
const queueItem6 = new QueueItem("Pessoa 6");
const queueItem7 = new QueueItem("Pessoa 7");

queue.enqueue(queueItem1);
queue.enqueue(queueItem2);
queue.enqueue(queueItem3);
queue.enqueue(queueItem4);
queue.enqueue(queueItem5);
queue.enqueue(queueItem6);
queue.enqueue(queueItem7);

queue.print();

queue.dequeue();
queue.print();

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());
