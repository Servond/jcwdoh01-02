// LOOP

// FOR LOOP
// STEP FOR LOOP:
// 1. statement 1 (membuat atau mengupdate sebuah variable)
// 2. statement 2 pengecekan condition
// 3. jika condition statement ke 2 true maka block of code dijalankan
// 4. statement 3 melakukan increment atau decrement postfix
// 5. ulang dari step 2

for (let a = 11; a <= 10; a++) {
  // BLOCK OF CODE
  console.log(a, "INI FOR LOOP");
}

// console.log(i); <- Error, tidak bisa menggunakan variable yang dibuat didalam for loop

// console.log(11 <= 10);

// WHILE LOOP
let i = 11;

// step while loop:
// 1. pengecekan condition
// 2. jika pengecekan condition true maka jalankan block of code
// 3. ulang dari step 1
while (i <= 10) {
  // BLOCK OF CODE
  console.log(i, "INI WHILE LOOP");

  i++;
}

// DO WHILE LOOP
// AKAN BERJALAN MINIMAL 1KALI
i = 11;

// step do while loop:
// 1. jalankan block of code didalam do
// 2. pengecekan condition
// 3. jika pengecekan condition true maka ulang step 1

do {
  // BLOCK OF CODE
  console.log(i, "INI DO WHILE LOOP");

  i++;
} while (i <= 10);

// BREAK

let x = 1;

while (true) {
  // BLOCK OF CODE
  console.log(x);

  if (x === 10000) break;

  x++;
}

// CONTINUE

for (let y = 1; y <= 10; y++) {
  if (y % 2 === 0) {
    // AKAN MENJALANKAN BLOCK OF CODE IF JIKA ANGKA GENAP
    continue;
  }

  // CODE DIBAWAH AKAN DIJALANKAN JIKA IF DIATAS MERETURN FALSE
  console.log(y);
}
