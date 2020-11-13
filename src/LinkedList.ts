import OrderBy from "./OrderBy";

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList extends OrderBy {
  head: Node | null = null;

  constructor() {
    super();
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Linkedlist is empty!!");
    }
    let iterator = 0;
    let node: Node | null = this.head;
    while (iterator !== index && node) {
      iterator = iterator + 1;
      node = node.next;
    }
    if (!node) {
      throw new Error("Index out of bound!!");
    }
    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("LinkedList is empty!!");
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      return;
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    let leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  // TODO
  ascending(): void {
    let { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  descending() {
    let { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j + 1, j)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let res = [];

    while (node) {
      res.push(node.data);
      node = node.next;
    }

    console.log(res.join(" -> "));
  }
}

export default LinkedList;
