class ArrayList<T> {
    public items: T[] = [];

    public insert(item: T) {
        this.items.push(item);
    }

    public toString() {
        return this.items.join();
    }

    public bubbleSort() {
        for (let i = 0; i < this.items.length; i++) {
            for (let j = 0; j < this.items.length -1; j++) {
                if (this.items[j] > this.items[j + 1]) {
                    this.swap(this.items, j, j + 1);
                }
            }
        }
    }

    public selectionSort() {
        let indexMin = 0;
        for (let i = 0; i < this.items.length -1; i++) {
            indexMin =i;
            for (let j = i; j < this.items.length; j++) {
                if (this.items[indexMin] > this.items[j]) {
                    indexMin = j;
                }
            }
            if (i != indexMin) {
                this.swap(this.items, i, indexMin);
            }
        }
    }

    public insertionSort() {
        let j: number;
        let temp: any;

        for (let i = 0; i < this.items.length; i++) {
            j = i;
            temp = this.items[j];
            while (j > 0 && this.items[j -1] > temp) {
                this.items[j] = this.items[j -1];
                j--;
            }
            this.items[j] = temp;
        }

    }

    public mergeSort() {
        this.items = this.mergeSortRec(this.items);
    }

    private mergeSortRec(array: T[]) {
        let length = this.items.length;

        if (length === 1) {
            return array;
        }

        let mid = Math.floor(length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid, length);

        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
    }

    private merge(left: T[], right: T[], ) {
        let result: T[] = [];

        let il = 0;
        let ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    }

    public quickSort() {
      this.quick(this.items, 0, this.items.length -1);
    }

    private quick(array: T[], left: number, right: number) {
        let index: number;
        if (array.length > 1) {
            index = this.partition(array, left, right);
            if (left < index -1) {
                this.quick(array, left, index -1);
            }
            if (index < right) {
                this.quick(array, index, right);
            }
        }
    }

    private partition(array: T[], left: number, right: number): number {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j--
            }
        }
        if (i <= j) {
            this.swap(array, i, j);
            i++;
            j--;
        }

        return i;
    }

    private swap(list: T[], index1: number, index2: number) {
        let aux = list[index1];
        list[index1] = list[index2];
        list[index2] = aux;
    }
}


const numbers = new ArrayList<number>();

numbers.insert(1);
numbers.insert(3);
numbers.insert(5);
numbers.insert(2);
numbers.insert(4);
numbers.insert(7);
numbers.insert(6);

console.log(numbers.toString());

// numbers.bubbleSort();
// numbers.selectionSort();
// numbers.insertionSort();
// numbers.mergeSort();
// numbers.quickSort();

console.log(numbers.toString());


