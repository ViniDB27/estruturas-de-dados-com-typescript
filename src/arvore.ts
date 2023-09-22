class No {
    public key: number;
    public left?: No;
    public right?: No;

    constructor(key: number, left?: No, right?: No ) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class Arvore {
    public root: No;

    public insert(no: No) {
        if (!this.root) {
            this.root = no;
        } else {
            this.insertNode(this.root, no);
        }
    }

    private insertNode(no: No, newNo: No) {
        if (newNo.key < no.key) {
            if (no.left === null) {
                no.left = newNo;
            } else {
                this.insertNode(no.left, newNo);
            }
        } else {
            if (no.right === null) {
                no.right = newNo;
            } else {
                this.insertNode(no.right, newNo);
            }
        }
    }

    public search(key: number) {
        return this.searchNode(key, this.root)
    }

    private searchNode( key: number, no?: No) {
        if (no === null) {
            return false;
        }
        if (key < no.key) {
            return this.searchNode(key, no.left);
        } else if (key > no.key) {
            return this.searchNode(key, no.right);
        } else {
            return true;
        }
    }

    public remove(key: number) {
        this.removeNode(key, this.root)
    }
q
    private removeNode( key: number, no?: No) {
        if (no === null) {
            return null;
        }
        if (key < no.key) {
            no.left = this.removeNode(key, no.left);
            return no;
        } else if (key > no.key) {
            no.right = this.removeNode(key, no.right);
            return no;
        } else {
            if (no.left === null && no.right === null) {
                no = null
                return no;
            }
            if (no.left === null) {
                no = no.right;
                return no;
            } else if (no.right === null) {
                no = no.left;
                return no;
            }

            let aux = this.findMinNode(no.right);
            no.key = aux.key;
            no.right = this.removeNode(aux.key, no.right);
            return no;
        }
    }

    private findMinNode(no: No) {
        while (no && no.left !== null) {
            no = no.left;
        }

        return no;
    }

    public min() {
        return this.minNode(this.root);
    }

    private minNode(no?: No) {
        if (no) {
            while (no && no.left !== null) {
                no = no.left;
            }

            return no;
        }
        return null;
    }

    public max() {
        return this.maxNode(this.root);
    }

    private maxNode(no?: No) {
        if (no) {
            while (no && no.right !== null) {
                no = no.right;
            }

            return no;
        }
        return null;
    }
    public inOrderTraverse(callback: Function) {
        this.inOrderTraverseNode(callback, this.root)
    }

    private inOrderTraverseNode(callback: Function, no?: No) {
        if (no !== null) {
            this.inOrderTraverseNode(callback, no.left);
            callback(no.key);
            this.inOrderTraverseNode(callback, no.right);
        }
    }

    public preOrderTraverse(callback: Function) {
        this.preOrderTraverseNode(callback, this.root)
    }

    private preOrderTraverseNode(callback: Function, no?: No) {
        if (no !== null) {
            callback(no.key);
            this.preOrderTraverseNode(callback, no.left);
            this.preOrderTraverseNode(callback, no.right);
        }
    }

    public postOrderTraverse(callback: Function) {
        this.postOrderTraverseNode(callback, this.root)
    }

    private postOrderTraverseNode(callback: Function, no?: No) {
        if (no !== null) {
            this.postOrderTraverseNode(callback, no.left);
            this.postOrderTraverseNode(callback, no.right);
            callback(no.key);
        }
    }


}
