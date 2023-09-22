class Stack {
    private _items: StackItem[] = [];

    get items(): StackItem[] {
        return [...this._items];
    }

    public push(item: StackItem): number {
        return this._items.push(item);
    }

    public pop(): StackItem {
        return this._items.pop();
    }

    public peek() {
        return this._items[this._items.length - 1];
    }

    public isEmpty(): boolean {
        return this._items.length === 0;
    }

    public clean() {
        this._items = [];
    }

    public size(): number {
        return this._items.length;
    }

    public print() {
        for (const item of this._items) {
            console.log(item.name);
        }
    }

}

class StackItem {
    constructor(
        public readonly name: string,
    ) { }
}


const stack = new Stack();

const item1 = new StackItem("Livro 1");
const item2 = new StackItem("Livro 2");
const item3 = new StackItem("Livro 3");
const item4 = new StackItem("Livro 4");
const item5 = new StackItem("Livro 5");

stack.push(item1);
stack.push(item2);
stack.push(item3);
stack.push(item4);
stack.push(item5);
stack.print();

const itemRemoved = stack.pop();
console.log(itemRemoved);
stack.print();

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

console.log(stack.items);

stack.clean();
stack.print();
console.log(stack.items);

