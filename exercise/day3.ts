//NO 1
// kode untuk menampilkan tabel perkalian bilangan bulat tertentu.
const num: number=9;
for(let i= 1; i <=10;i++){
    const rest= i * num;
    console.log(`${num} * ${i} = ${rest}`);   
}
//NO 2
//kode untuk memeriksa apakah suatu string termasuk palindrom atau bukan

 const inputString: string="madam"
 if (inputString) {
     console.log(`${inputString} adalah palindrom.`);
 } else {
     console.log(`${inputString} bukan palindrom.`);
}
//NO 3
//Kode untuk mengubah sentimeter ke kilometer.
const form: number=100000
const to: number=form/100000
console.log(` ${to}km`);

//NO 4
//Tulis kode untuk memformat angka sebagai mata uang (IDR)
const curr1 = 1000;
let curr = new Intl.NumberFormat('id-IN', {style: 'currency',currency: 'IDR',});
console.log(`versi yang diformat dari ${curr1} adalah ${curr.format(curr1)}`);

//NO 5
// kode untuk menghapus kemunculan pertama "string pencarian" tertentu dari sebuah string
const string: string = "Hello Word";
const searchString: string ="ell";
console.log(string.replace(searchString, ""));

//NO 6
// kode untuk menggunakan huruf besar pada huruf pertama setiap kata dalam sebuah string
const str: string = "hello word";
const cap: string[]=string.split(" ");
for(let i=0; i < cap.length ; i++){
    cap[i] = cap[i][0].toUpperCase() + cap[i].slice(1);
}
console.log(cap.join(" "));

//NO 7
// kode untuk menukar huruf besar/kecil setiap karakter dari string


//NO 8
//kode untuk mencari bilangan terbesar dari dua bilangan bulat tertentu
let num1 = 42;
let num2 = 27;

let largest = (num1 > num2) ? num1 : num2;

console.log("The largest number is " + largest);


  //NO 9
  // pernyataan kondisional untuk mengurutkan tiga angka


  // NO 10
  //kode yang menunjukkan 1 jika inputnya berupa string, 2 jika inputnya berupa angka, dan 3 untuk data lainnya
// jenis



// NO 11
//kode untuk mengubah setiap huruf a menjadi * dari string input
