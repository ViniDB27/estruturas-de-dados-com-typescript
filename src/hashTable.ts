class HashTable {
    public table: any[] = [];

    public put(key: string, value: any) {
        const position = this.loseloseHashCode(key)
        console.log(position + ' ' + value);
        this.table[position] = value;
    }
    public remove(key: string) {
        this.table[this.loseloseHashCode(key)] = undefined;
    }
    public get(key: string) {
        return this.loseloseHashCode(key)
    }
    public loseloseHashCode(key: string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    public print() {
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i] != undefined) {
                console.log(i + ' ' + this.table[i]);
            }
        }
    }

}

const hashTable = new HashTable();

hashTable.put("nome", "vinicio");
hashTable.put("rua", "sei la");
hashTable.put("estado", "sc");
hashTable.put("bairro", "qualquer um");
hashTable.put("cidade/provincia", "lages");

console.log("get: ", hashTable.get("bairro"))

hashTable.remove("bairro")
console.log("remove: ", hashTable.get("bairro"))

hashTable.print();
