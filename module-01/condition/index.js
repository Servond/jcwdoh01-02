// COMPARISON OPERATORS
let bool = true;

// EQUAL TO / SAMA DENGAN
// HANYA MEMBACA VALUE TANPA MEMBACA TIPE DATANYA
console.log(5 == "5");
console.log("apel" == "Apel");

// STRICT EQUAL TO / SAMA DENGAN
// MEMBACA VALUE DAN TIPE DATANYA
console.log(5 === "5");

// NOT EQUAL TO / TIDAK SAMA DENGAN
console.log(5 != 5);

// STRICT NOT EQUAL TO
console.log(5 !== "5");
console.log("apel" !== "jeruk"); // APAKAH APEL BEDA DENGAN JERUK = TRUE / BENAR APEL BERBEDA DENGAN JERUK
console.log("apel" === "jeruk"); // APAKAH APEL SAMA DENGAN JERUK = false // SALAH APEL BERBEDA DENGAN JERUK

// GREATER THAN
console.log(5 > 6); // APAKAH 5 LEBIH BESAR DARI 6 = FALSE
console.log(5 > 5); // APAKAH 5 LEBIH BESAR DARI 5 = FALSE

// GREATER THAN OR EQUAL TO
console.log(5 >= 5); // APAKAH 5 LEBIH BESAR DARI 5 ATAU APAKAH 5  SAMA DENGAN 5 = TRUE

// LESS THAN
console.log(5 < 6); // APAKAH 5 LEBIH KECIL DARI 6 = TRUE
console.log(5 < 5); // APAKAH 5 LEBIH KECIL DARI 5 = FALSE

// LESS THAN OR EQUAL TO
console.log(5 <= 5); // APAKAH 5 LEBIH KECIL DARI 5 ATAU APAKAH 5 SAMA DENGAN 5 = TRUE

// IF
let nilai = "B";

if (nilai === "B") console.log("Good Result");

if (nilai === "C") {
  console.log("Standard Result");
  console.log("Nilai diperbaiki");
}

// ELSE
nilai = "C";
if (nilai === "A") {
  console.log("Excellent Result");
} else {
  console.log("Diperbaiki");
}

// TERNARY OPERATOR ATAU PENYINGKATAN PENULISAN IF ELSE
console.log(nilai === "A" ? "Excellent Result" : "Diperbaiki");

// ELSE IF
if (nilai === "A") {
  console.log("Excellent Result");
} else if (nilai === "B") {
  console.log("Good Result");
} else if (nilai === "C") {
  console.log("Average Result");
} else {
  console.log("Diperbaiki");
}

let angka = 9;

if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

// SWITCH / CASE
nilai = "B";
switch (nilai) {
  case "A": // A === A
    console.log("Excellent Result");
    break;
  case "B":
    console.log("Good Result");
    break;
  case "C":
    console.log("Average Result");
    break;
  default:
    console.log("Poor Result");
}

// TRUTHY AND FALSY

// TRUTHY
console.log(Boolean(" "));
console.log(Boolean("b"));
console.log(Boolean(10));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

let input = "asd";
console.log(Boolean(input));
if (input) {
  // JIKA INPUT === TRUE
  console.log(`input kamu ${input}`);
} else {
  console.log("Harap masukkan input");
}
// !false, value akan dibalik true
// !true, value akan dibalik false
if (!input) {
  /// JIKA INPUT === FALSE
  console.log("Harap masukkan input");
} else {
  console.log(`input kamu ${input}`);
}
