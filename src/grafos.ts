class Queue {
    private _items: string[] = [];

    public enqueue(item: string): number {
        return this._items.push(item);
    }

    public  dequeue(): string {
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
            console.log(item);
        }
    }

}

class Dicionario {
    public items: Object = {};

    public set(key: string, value: any) {
        this.items[key] = value;
    }
    public delete(key: string) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }
    public has(key: string) {
        return !!this.items[key];
    }
    public get(key: string) {
        return this.items[key];
    }
    public clear() {
        this.items = {};
    }
    public size() {
        return Object.keys(this.items).length;
    }
    public keys() {
        return Object.keys(this.items);
    }
    public values() {
        return Object.values(this.items);
    }

    public getItems() {
        return this.items;
    }

}

class Graph {
    public vertices: string[] = [];
    public adjList = new Dicionario();
    public addVertex (v: string) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }
    public addEdge (v: string, w: string) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
    public toString (): string {
        let s: string = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + '->';
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }


    public initializeColor() {
        let color = [];
        for (let i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    public bfs(v: string, callback: Function) {
        let color = this.initializeColor();
        const queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            const u = queue.dequeue();
            let neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] ==='white' ) {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            callback(u);
        }
    }

    public dfs(callback: Function) {
        let color = this.initializeColor();
        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.dfsVisit(this.vertices[i], color, callback);
            }
        }
    }

    public dfsVisit(u: string, color: any[], callback: Function) {
        color[u] = 'grey';
        callback(u)
        
        let neighbors = this.adjList.get(u);

        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] ==='white' ) {
                this.dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }

}

function printNode(value: string) {
    console.log('Visitante vertex: ' + value);
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (const myVertex of myVertices) {
    graph.addVertex(myVertex);
}

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

console.log(graph.toString());

graph.bfs(myVertices[0], printNode);

graph.dfs(printNode);