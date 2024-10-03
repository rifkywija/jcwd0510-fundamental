//versi js
//const message="hello word"

//versi ts
const message:string="hello word";

//======== string build in method

const nama:string="Siti Khodijah";
const nama2:string="Metal";

console.log(nama.toLowerCase()); //cara langsung
console.log(nama.toUpperCase());
console.log(nama.replace("S",'o'));
console.log(nama.replaceAll("i",'o'));
console.log(nama.split(" "));
console.log(nama.slice());

const nama1:string=nama.toLowerCase();
console.log(nama1); //cara ditampung dulu divariable

// ==========template literals/template string

const nama4 : string  = "jack";
const message1 : string  = `welcome ${nama4}`;

console.log(message1)
console.log("welcom"+""+ nama4) //cara manual

// =====NUMBER BUILD IN METHOD
const angka:string ="2000"
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(typeof parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// =========TYPE CONVERSION

// STRING CONVERSION
const angka1: Number = 20;
console.log(String(123));
console.log(angka1.toString());


// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ======   DATE DATA TYPES
const now: Date = new Date();

console.log(now);

// get method
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getTime());

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);

// ========== BASIC OPERATOR
// + =>pertambahan
// - =>pengurangan
// * =>perkalian
// / =>pembagian
// % =>modulo sisa bagi
// ** =>pangkat

const a = 20;
const b = 10;
const c = a+b;
console.log(c);

console.log(1+1); //pertambahan
console.log(2-1); //pengurangan
console.log(2*4); //perkalian
console.log(4/2); //pembagian
console.log(9%2); //sisa bagi
console.log(3**2); //pangkat

// =========== MODIFY IN PLACE
// n= n + 2

let n: number = 4;
 n += 2; //->cara pendeknya
// n=n+2 ->cara panjangnya

console.log(n);

// ============INCREMENT & DECREMENT
let counter: number =2;

// counter++; //increment
counter--; //decrement

console.log(counter);

// =========== POSTFIX(ditampilkan dulu,baru ditambah 1) & PREFIX(ditambah 1 dulu,hasilnya ditampilkan)

let counter2: number = 2;

// console.log(++counter2);//prefix
console.log(counter2++); //postfix

// ========== COMPARISON OPERATOR

// console.log(5 =="5"); //PENGECEKAN DIVALUENYA SAJA
//console.log(5 ==="5"); //PENGECEKAN DIVALUE DAN TIPE DATA

console.log(5>2);
console.log(5<2);
console.log(5<=5);
console.log(5<5);

// ===========MATH

// math ceil-> membulatkan angka keatas
console.log(Math.ceil(4.2));

// math floor -> membulatkan angka kebawah
console.log(Math.floor(4.7));

// math round -> membulatkan angka kebilangan bulat yang terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,2,3,4,5,6,));

//math min->mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(2,3,1,4,5,6,7));

//math abs -> menghilangkan tanda negatif
console.log(Math.abs(-11));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());
