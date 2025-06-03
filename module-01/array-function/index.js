// let kotakSepatu = "adidas";
// kotakSepatu = "nikee";

// Array
const kotakSepatu = ["adidas", "nike", 1];
console.log(kotakSepatu);

const alphabet = ["A", "B", "C", "D"];
console.log(alphabet[1]);

// ARRAY BUILD IN METHOD

alphabet.push("E");
console.log(alphabet);

alphabet.unshift("Z");
console.log(alphabet);

alphabet.pop();
console.log(alphabet);

alphabet.shift();
console.log(alphabet);

const angka = [];
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
  angka.push(i + 1);
}
console.log(angka);

angka.forEach((data) => console.log(data));
const loop = angka.map((value) => value);
console.log(loop);

for (let val of angka) {
  console.log(val);
}
