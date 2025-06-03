const namaSepatu = "Adidas";
const hargaSepatu = 50000;
const modelSepatu = "Boost";

const sepatu = {
  // nama = key, "adidas" adalah value
  nama: "adidas",
  // harga = key, 50000 adalah value
  harga: 50000,
  // model = key, "boost" adalah value
  model: "Boost",
};

const sepatu2 = {
  // nama = key, "adidas" adalah value
  nama: "NIKE",
  // harga = key, 50000 adalah value
  harga: 50000,
  // model = key, "boost" adalah value
  model: "Boost",
};

console.log(sepatu);

const mobil = {
  brand: "Toyota",
  model: "Alphard",
  harga: 50000,

  ignition() {
    return "Mobil menyala";
  },
};

console.log(mobil.ignition());
console.log(mobil["brand"]);
console.log(mobil.brand);
mobil.color = "Red";
console.log(mobil);

const { brand, model } = mobil;
console.log(brand);
console.log(model);

// 4 PILAR OOP

// Encapsulation
// Membungkus data dengan method dalam satu unit

// Inheritance
// Mewariskan property dan method ke anaknya

// Abstraction
// Menyembunyikan cara kerja logic method

// Polymorphism
//

class Sepatu {
  nama;
  harga;
  model;

  constructor(paramNama, paramHarga, paramModel) {
    this.nama = paramNama;
    this.harga = paramHarga;
    this.model = paramModel;
  }
}

const newSepatu = new Sepatu("Aidas", 50000, "Boost");
newSepatu.nama = "Adidas";
console.log(newSepatu);

const sepatu3 = new Sepatu("Puma", 2000, "Macan");
console.log(sepatu3);

class Car {
  brand;
  price;
  model;
  #color;
  #customColor = false;

  constructor(brand, price, model, color) {
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.#color = color;
  }

  #setCustomColor(bool) {
    this.#customColor = bool;
  }

  getColor() {
    return this.#color;
  }

  sellCar() {
    return {
      brand: this.brand,
      model: this.model,
      color: this.#color,
      sellPrice: this.#customColor ? this.price - 5000 : this.price,
    };
  }

  setColor(color) {
    this.#color = color;
    this.#setCustomColor(true);
  }
}

const BMW = new Car("BMW", 50000, "IX", "white");
BMW.setColor("red");
console.log(BMW.sellCar());
console.log(BMW.getColor());

const BMW2 = new Car("BMW", 50000, "IX", "white");
console.log(BMW2.sellCar());
