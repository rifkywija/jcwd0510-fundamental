// // ARRAY

// // const arr = []; //cara 1=sering dipakai
// // const arr2= new Array(); //cara 2=jrng dipakai

// const arr: string[]= ["A","B","C"];
// const arr2: string[]= new Array ("A","B","C");

// const arr3: number[]= [1,2,3];
// const arr4: number[]= new Array(1,2,3);

// //ARRAY OF OBJECT

// // const students: {name:string;email:string}[]=[
// //     {name: "budi", email:"budi@mail.com"},
// //     {name: "siti", email:"siti@mail.com"},
// //     {name: "joko", email:"joko@mail.com"},
// // ]

// //PascalCase
// //Singular
// // interface student{
// //     name:string;
// //     email:string;
// // }

// type student={
//     name:string;
//     email:string;
//     hobby?: string; //optional boleh ada boleh enggak (?=optional)
//     address?:Address;
// }

// interface Address {
//     street: string;
//     city: string;
// }
// const students:student[]=[
//     {name: "budi", email:"budi@mail.com",hobby:"Futsal"},
//     {name: "siti", email:"siti@mail.com",address:{street:"jln xyz",city:"kota xyz"},},
//     {name: "joko", email:"joko@mail.com"},
// ]

// //FOR OF===================
// const fruits: string[]=["Apple","Banana","Orange"];

// for(const fruit of fruits){
//     console.log(fruit);   
// }

// //execise for of
// // hitung jumlah semua bilangan dalam array menggunakan for of
// // ex input = [1,2,3,4,5,6]-> 21

// const numbers: number[]=[1,2,3,4,5,6];
// let total: number=0;

// for(const number of numbers){
//     total += number
// }
// console.log(total);

// //FUNCTION==============
// //ADA 2 CARA MENULISKAN  FUNGSI
// //1. FUNCTION DECLARATION (fungsinya bisa digunakan berkali-kali)
// function square( number : number){//yg didalam kurungnamanya parameter
//     return number*number;
// }
// const result = square(4)//kalau sudah dimasukkan namanya argumen contohnya nomor 4
// const result2 = square(14)//kalau sudah dimasukkan namanya argumen contohnya nomor 4
// const result3 = square(2)//kalau sudah dimasukkan namanya argumen contohnya nomor 4
// console.log(result);
// console.log(result2);
// console.log(result3);
// //2. FUNCTION EXPRESSION
// const square1=function (number:number) {
//    return number*number  
// }

// const result4=square1(4)
// const result5=square1(9)

// console.log(result4);
// console.log(result5);

// //FUNCTION SCOPE
// //VARIABLE YG DI DEFINE DI DALAM FUNCTION HANYA BISA DIAKSES DIDALAM FUNCTION TSB

// function greeting(){
//     const hello = "Hello"
//     console.log(hello);
//     return hello;
// }
// greeting()

// // PARAMETER ARGUMENT
// //PARAMETER->VARIABLE YG MEWAKILI VALUE DARI ARGUMENT YG DIMASUKKAN

// //ARGUMENT->VALUE YG DIMASUKKAN SAAT PEMANGGILAN FUNCTION


//          parameter
function greeting(name : string){
const hello = "Hello"
console.log(hello);
 return hello +" "+ name;
}
//              argument
    console.log (greeting("budi"))


// DEFAULT PARAMETER

function multiply(a:number,b:number=1){
    console.log(a);
    console.log(b);
    return a*b
}
console.log(multiply(5,70));
console.log(multiply(5));

//rest parameter
//mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a:number,b:number,...manyMoreArgs:number[]){
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
}
myFunc(1,2,3,4,5,6,7,8,9,10)


// NESTED FUNCTION
// fungsi yg berada didalam fungsi
//inner function bisa akses parameter dari outer function
//outer function tidak bisa mengakses parameter dari iner function

//outer function
function getMessage(firstName:string){
 //iner function1
 function sayHello(){
    return "Hello"+ firstName+",";
 }   

 //iner function2 
 function welcomeMessage(){
    return "Welcome To Purwadhika!";
 }
 return sayHello()+" "+welcomeMessage()
}
console.log(getMessage(" Budi "));

//closure
//inner function selalu mempunyai akses ke variable dan parameter dari outer function
//bahkan setelah function tsb direturn

function greeting1(name:string){
    const defaultMessage: string="hello";

    return function (){
        return defaultMessage + " " + name;
    };
}

console.log(greeting1("budi")());

//recursive
//fungsi yang memanggil dirinya sendiri

function countDown(number:number){
    console.log(number);
    let nextNumber = number -1
    if(nextNumber > 0){
        countDown(nextNumber);
    }
}

countDown(10)

//arrow function
//shortcut untuk menuliskan function expression

//contoh function expression 
const square2 = function (number:number){
    return number*number;
}

//contoh jika diubah ke arrow function
const square3 = (number:number)=>{
    return number*number;
}

//kalo misalnya cuma 1 line bisa dibikin dibawah ini
const square4 = (number:number) => number*number;


// array build in method
//join -> gunanya untuk menggabungkan value yg ada dlm array ke dlm bentuk string
const words: string []=["hello","world"]
console.log(words.join(" "));

// pop -> menghilangkan isi value paling akhir dlm array
const words2: string[]=["hello","world","hello"]
words2.pop();
console.log(words2);

//shift -> menghilangkan value paling depan dalam array
const words3: string[]=["test","world","hello"]
words3.shift();
console.log(words3);

//push -> menambahkan value ke dalam array dipaling akhir
const words4: string[]=["hello","world"]
words4.push("Purwadhika");
console.log(words4);

//unshift -> menambahkan value ke urutan paling depan array
const words5: string[]=["hello","world"];
words5.unshift("jogja")
console.log(words5);


//concat -> menggabungkan 2 array menjadi 1 array
const arr1: string[]=["hello"];
const arr2: string[]=["world"];
const arr3: string[]=["world"];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1).concat(arr3));

//another option
const mergeArr = [...arr1,...arr2,...arr3];//spread
console.log(mergeArr);


//splice -> untuk menghapus,mengganti,atau menambahkan value pada sebuah array
//rumus -> splice(startIndex,brpYgMauDiDelete,item)

const months:string []=["jan","march","april","june"];

months.splice(1,0,"feb"); //menambahkan pd index 1
console.log(months);

months.splice(4,1); //menghapus pd index 4
console.log(months);

months.splice(3,1,"may"); // mengganti value pd index 3
console.log(months);

// slice ->mereturn baru dngn value yg sudah ditentukan index start dan index end dari array tsb
//rumus:slice(startIndex,endIndex)

const fruits: string[]=["Apple","Banana","Orange","Lemon","Mango"];
console.log(fruits.slice(1,4)); // dari depan
console.log(fruits.slice(-4,-1)); // dari belakang

// indexof -> mencari index dari value yg kita search
// kalo tidak ditemukan akan me return -1

const fruits2: string[]=["Apple","Banana","Orange","Lemon","Mango"];
console.log(fruits2.indexOf("Lemon"));

//sort -> mengurutkan isi array berupa string atau number
//versi string

const fruits3: string[]=["Apple","Banana","Orange","Lemon","Mango"]
fruits3.sort();
console.log(fruits3);

// versi number tanpa compare number
const points: number[]=[3,5,1,6,9,2];
points.sort();
console.log(points);

// versi number menggunakan compare number
const points1: number[]=[3,5,1,6,9,20];
points.sort(( a , b)=> a - b );  //-> asc(kecill ke besar)
//points2.sort((a ,b)=>b-a); desc(besar ke kecil)
console.log(points1);

//reverse -> membalikkan urutan element dalam array
const points3: number[]=[3,5,1,6,9,20];
points3.reverse();
console.log(points3);

// foreach -> melakukan looping pd array tpi tidak me-return apapun
const fruits4: string[]=["Apple","Banana","Orange","Lemon","Mango"]
const result6=fruits4.forEach((fruit,index)=>{
    console.log(index);
    console.log(fruit);
})

// map -> melakukan looping sama kaya forEach tpi mereturn array baru
const fruits5: string[]=["Apple","Banana","Orange","Lemon","Mango"]
const result7= fruits5.map((fruit)=>{
    return fruit;
})
console.log(result7);

//filter -> melakukan looping juga sama kaya map dan menghasilkan array baru berdasarkan kondisi pada return function
const ages: number[]=[32,15,29,21,40];
const result8 = ages.filter((age)=>{
    return age > 17;
}) 
console.log(result8);

//find ->mencari value yang ditemukan pertama kali dalam array
const ages2: number[]=[3,15,29,15,40];

const result9=ages2.find((age)=> age > 14);

console.log(result9);

//findindex -> mirip kayak find tpi yg dihasilkan adalah indexnya
const ages3: number[]=[3,15,29,15,40];

const result10 = ages3.findIndex((age)=> age>14)

console.log(result10);

//reduce -> bisa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers1: number[]=[175,50,25,50];

const result11=numbers1.reduce((a,b)=> a+b);
console.log(result11);

//includes-> mengecek value pada array ada apa tidak.hasil returnnya adalah boolean
const fruits6: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];
console.log(fruits6.includes("Apple"));
