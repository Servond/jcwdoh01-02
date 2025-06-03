// FUNCTION

// FUNCTION DECLARATION
function pertambahan(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    console.log(a + b);
  }
}

// PEMANGGILAN FUNCTION
pertambahan(5, 6);
pertambahan("a", 2);

// FUNCTION EXPRESSION
const pengurangan = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    console.log(a - b);
  }
};

// PEMANGGILAN FUNCTION
pengurangan(5, 2);

// ARROW FUNCTION
let hasilPerkalian;
const perkalian = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    hasilPerkalian = a * b;
  }
};

perkalian(5, 5);
console.log(hasilPerkalian);
function pembagian(a, b) {
  let hasilPembagian = a / b;
  return hasilPembagian;
}

let hasil = pembagian();
console.log(hasil);

// DEFAULT PARAMETER

function modulo(a, b = 5) {
  return a % b;
}

console.log(modulo(10, 3, 6));

// REST PARAMETER

function message(...c) {
  let hasil = "";

  for (let value of c) {
    hasil += value + " ";
  }
  return hasil;
}

console.log(message("hello", "world", "Nama", "saya", "budi"));
