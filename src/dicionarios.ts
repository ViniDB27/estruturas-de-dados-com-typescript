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

}

const dicionario = new Dicionario();

dicionario.set("um", 1);
dicionario.set("dois", 2);
dicionario.set("tres", 3);
dicionario.set("quatro", 4);
dicionario.set("cinco", 5);

console.log(dicionario.keys());
console.log(dicionario.values());
console.log(dicionario.get("quatro"));
console.log(dicionario.size());

dicionario.delete("tres");

console.log(dicionario.keys());
console.log(dicionario.values());

dicionario.clear();

console.log(dicionario.keys());
console.log(dicionario.values());


