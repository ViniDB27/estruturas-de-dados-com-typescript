class Sett {

    public items: Object = {};

    public add(value: any) {
        if (!this.has(value)) {
            this.items[value] = value;
        }
    }

    public delete(value: any) {
        if (this.has(value)) {
            delete this.items[value];
        }
    }

    public has(value: any) {
        return this.items.hasOwnProperty(value);
    }

    public clear() {
        this.items = {};
    }

    public size() {
        return Object.keys(this.items).length;
    }

    public values() {
        return Object.values(this.items);
    }

    public union(set: Sett) {
        const unionSet = new Sett();
        let values = this.values();

        for (const value of values) {
            unionSet.add(value);
        }

        values = set.values();

        for (const value of values) {
            unionSet.add(value);
        }

        return unionSet;
    }

    public intersection(set: Sett) {
        const intersectionSet = new Sett();
        const values = this.values();

        for (const value of values) {
            if (set.has(value)) {
                intersectionSet.add(value);
            }
        }

        return intersectionSet;
    }

    public difference(set: Sett) {
        const differenceSet = new Sett();
        let values = this.values();

        for (const value of values) {
            if (!set.has(value)) {
                differenceSet.add(value);
            }
        }

        return differenceSet;
    }

    public subset(set: Sett) {
        if (this.size() > set.size()) {
            return false;
        } else {
            let values = this.values();

            for (const value of values) {
                if (!set.has(value)) {
                    return false;
                }
            }

            return true;
        }
    }

}

const set = new Sett();

set.add(1);
set.add("Bola");
set.add(4);
set.add(true);
set.add(1.45);

// console.log(set.values());
// console.log(set.size());
// console.log(set.has(4));
//
// set.delete(1);
// console.log(set.values());
// console.log(set.size());

// set.clear();
// console.log(set.size());

const newSet = new Sett();

newSet.add(2);
newSet.add("Gol");
newSet.add(5);
newSet.add(false);
newSet.add(4.45);
newSet.add(1.45);
newSet.add("Bola");
newSet.add(1);
newSet.add(4);
newSet.add(true);

const union = set.union(newSet);
console.log(union.values());


const intersection = set.intersection(newSet);
console.log(intersection.values());

const difference = set.difference(newSet);
console.log(difference.values());

const subset = set.subset(newSet);
console.log(subset);