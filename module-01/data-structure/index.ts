// STACK

class Stack {
  #container: number[] = [];

  push(element: number) {
    this.#container.push(element);
  }

  pop() {
    this.#container.pop();
  }

  get() {
    return this.#container;
  }
}

const newStack = new Stack();
newStack.push(5);
newStack.push(4);
console.log(newStack.get());
newStack.pop();
console.log(newStack.get());

// QUEUE
class Queue {
  #container: number[] = [];

  push(element: number) {
    this.#container.push(element);
  }

  shift(): string | undefined {
    if (this.#container.length === 0) return "Sudah tidak ada";

    this.#container.shift();
  }

  get() {
    return this.#container;
  }
}

const newQueue = new Queue();
newQueue.push(5);
newQueue.push(4);
console.log(newQueue.get());
console.log(newQueue.shift());
console.log(newQueue.shift());
console.log(newQueue.shift());

console.log(newQueue.get());

// SET
const buah: string[] = ["jeruk", "jeruk", "jeruk", "jeruk", "apel"];
console.log(buah);

const newBuah = new Set(buah);
console.log(newBuah.add("pir"));
console.log(newBuah.has("jeruk"));
console.log(newBuah.delete("durian"));

const uniqueBuah: string[] = Array.from(newBuah);
console.log(uniqueBuah);

// HASH TABLE / MAP

const userObj = {
  name: "Budi",
  age: 22,
};
userObj.email = "budi@gmail.com";
console.log(userObj);

const userMap = new Map(Object.entries(userObj));
console.log(userMap);
userMap.set("phone", "00000");
userMap.set({ david: "david" }, "value");
console.log(userMap);

// LINKED LIST
const linkedList = {
  head: {
    element: "A",
    next: {
      element: "B",
      next: {
        element: "C",
        next: {
          element: "D",
          next: {
            element: "E",
            next: {},
          },
        },
      },
    },
  },
};
console.log(linkedList);

linkedList.head.next.next.next.next.next = {
  element: "F",
  next: null,
};
console.log(linkedList.head.next.next.next.next.next);
