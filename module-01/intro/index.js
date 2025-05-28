// memunculkan terminal -> CTRL + `
// save file -> CTRL + S
// memunculkan search bar visual studio code -> CTRL + SHIFT + P

// console -> mengacu pada sebuah terminal
// .log -> sebuah console bisa membuat sebuah logging (catatan)
// "Hello World" -> sebuah catatan yang akan ditampilkan di terminal kita
// ; -> adalah akhir sebuah syntax
console.log("Hello World");

// VARIABLE
// tempat penyimpanan data sementara kita.
// RULES PEMBUATAN VARIABLE
// 1. HANYA BOLEH MENGANDUNG KARAKTER, ANGKA, SYMBOL $ ATAU _
let $angka = 5;
let _angka = 5;
// 2. KARAKTER PERTAMA TIDAK BOLEH ANGKA
// let 5angka= 5; <- ERROR
// 3. PENAMAAN VARIABLE CASE SENSITIVE
let text = "Hello";
let Text = "Hello";
// 4. TIDAK BOLEH MENGGUNAKAN KATA YANG SUDAH DIRESERVED
// let let = ""; <- ERROR KARENA LET DIGUNAKAN UNTUK MENDECLARE SEBUAH VARIABLE

// DECLARE VARIABLE MENGGUNAKAN CONST
// CONST ATAU CONSTANTA,
// CARA MENDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA TIDAK BISA/BOLEH DIRUBAH LAGI SETELAH DIISI ATAU DIBUAT
const kotakSepatuAdidas = "Adidas";
// const kotakSepatuAdidas = "Adidas"; AKAN ERROR KARENA NAMA VARIABLE SUDAH ADA

console.log(kotakSepatuAdidas);

// kotakSepatuAdidas = "Adidas 2"; <- ERROR KARENA MAU MELAKUKAN PERUBAHAN PADA SEBUAH VARIABLE YANG DIDECLARE MENGGUNAKAN CONST/CONSTANTA
// console.log(kotakSepatuAdidas);

// DECLARE VARIABLE MENGGUNAKAN LET
// CARA MENDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA BISA/BOLEH DIRUBAH SETELAH DIISI ATAU DIBUAT
let kotakSepatuNike = "Nike";
// let kotakSepatuNike;  AKAN ERROR KARENA NAMA VARIABLE SUDAH ADA
console.log(kotakSepatuNike);

// merubah value pada sebuah variable yang dideclare atau dibuat menggunakan let
kotakSepatuNike = "Nike 2";
console.log(kotakSepatuNike);

let angka = 2;
let tambahSatu = 1;
angka = angka + tambahSatu;
console.log(angka);

// DECLARE VARIABLE MENGGUNAKAN VAR
// VAR DIGUNAKAN UNTUK MEMBUAT GLOBAL VARIABLE (*DIDALAM JAVASCRIPT SUDAH HAMPIR TIDAK PERNAH DIGUNAKAN)
var kotakSepatuPuma = "Puma";
var kotakSepatuPuma = "Puma 2";
console.log(kotakSepatuPuma);

// DATA TYPES

// PRIMITIVE DATA TYPES

// STRING (MENYIMPAN SEBUAH TEXT ATAU KALIMAT)
// TERDAPAT "" PADA SEBUAH STRING
const _string = "hello world";
console.log(_string);

// NUMBER (MENYIMPAN SEBUAH ANGKA, FLOAT, DECIMAL, INT)
const _number = 6;
console.log(_number);

// BOOLEAN (HANYA BISA MENYIMPAN VALUE ANTARA TRUE ATAU FALSE)
const _boolean = false;
console.log(_boolean);

// NULL
const _null = null;
console.log(_null);

// UNDEFINED
let _undefined;
console.log(_undefined);

// untuk mengecek tipe data pada sebuah variable
console.log(typeof _null);

// NON-PRIMITIVE DATA TYPES

// ARRAY
// OBJECT

// DATE
let hariIni = new Date("2021-01-01");
console.log(hariIni);

// BUILD-IN METHOD
// SYNTAX TERDIRI DARI DARI VALUE TIPE DATA ITU SENDIRI + . + NAMA BUILD IN METHODNYA

// BUILD-IN METHOD STRING
let $string = "HELLO E STRING";
console.log($string);

// MERUBAH SETIAP KARAKTER PADA STRING MENJADI KAPITAL
console.log($string.toUpperCase());

// MERUBAH SETIAP KARAKTER PADA STRING MENJADI HURUF KECIL
console.log($string.toLocaleLowerCase("in-ID"));

// MENGHAPUS TRAILING WHITESPACE / KELEBIHAN SPASI DI DEPAN DAN DIBELAKANG
console.log($string.trim());

// MERUBAH KARAKTER E MENJADI A (CASE SENSITIVE)
// HANYA MERUBAH KARAKTER PERTAMA YANG DITEMUKAN SAJA
console.log($string.replace("E", "A"));

// MERUBAH SETIAP KARAKTER YANG DIINGINKAN
console.log($string.replace(/L/gi, "B"));

// NUMBER BUILD IN METHOD
const $number = 5.246531;
console.log(typeof $number);

// BUILD IN METHOD UNTUK MERUBAH SEBUAH ANGKA MENJADI SEBUAH STRING
console.log(typeof $number.toString());

console.log($number.toFixed(3));

// NUMBER BISA MENGGUNAKAN BUILD IN METHOD OBJECT MATH
console.log(Math.pow(5, 2));
console.log(Math.PI);

// DATE BUILD IN METHOD
const $date = new Date();
console.log($date);

console.log($date.getFullYear());
console.log($date.getMonth() + 1);
console.log($date.getDate());
console.log($date.getDay());
console.log($date.toLocaleString("in-ID", { timeZone: "Asia/Jakarta" }));

// CHAINING BUILD IN METHOD
const number = 2;
console.log(number.toString().replace(2, "a"));

// OPERASI MATEMATIKA
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(27 % 5);
console.log(5 ** 5);

// MODIFY IN PLACE
let x = 5;
x += 10; // x = x + 10; // x = 5 + 10
console.log(x);

x -= 10;
console.log(x);

// CONCAT ATAU PENGGABUNGAN STRING
console.log("HELLO" + " WORLD");
let i = "HELLO";
i += " WORLD";
console.log(i);

// INCREMENT DAN DECREMENT (+1 atau -1)
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);

// POSTFIX DAN PREFIX

//POSTFIX
// TAMPILKAN TERLEBIH DAHULU BARU DITAMBAHKAN/DIKURANGI
console.log(x);
console.log(x++);
console.log(x);

//PREFIX
// MENAMBAHKAN/MENGURANGI TERLEBIH DAHULU BARU DITAMPILKAN
console.log(x);
console.log(--x);

// TEMPLATE LITERAL
const message = "Greeting";
console.log(message + ", Budi");
console.log(`${message}, Budi`);

const z = 6;
const f = 5;
console.log(5 + Number(z));
console.log(`Hasil perkalian ${z} x ${f} = ${z * f}`);
