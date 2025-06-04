type Angka = number;

let angkaTS: Angka = 5;

function pertambahanTS(a: number, b: number) {
  return a + b;
}

console.log(pertambahanTS(5, 2));

interface IPerson {
  name: string;
  age: number;
  email: string;
}

interface IPerson {
  password: string;
}

const personTS: IPerson = { email: "", name: "Budi", age: 22, password: "" };

function greetPersonTS(person: IPerson) {
  return `Hello, ${person.email}`;
}

console.log(greetPersonTS({ name: "sad", age: 22, email: "", password: "" }));

interface IProduct {
  name: string;
  price: number;
  menjual: (str: string) => string;
}

interface IBuku extends IProduct {
  author: string;
  publisher: string;
}

class Product implements IProduct {
  name = "";
  price = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  menjual(str: string) {
    return "";
  }
}

class Buku extends Product implements IBuku {
  author: string;
  publisher: string;

  constructor(name: string, price: number, author: string, publisher: string) {
    super(name, price);
    this.author = author;
    this.publisher = publisher;
  }
}

const buku = new Buku("Harry Potter", 50000, "JK ROwling", "Matahari");
console.log(buku.price);

const buku2: IBuku = {
  author: "JK",
  publisher: "mathari",
  name: "",
  price: 0,
};

// CTRL + K, Q
