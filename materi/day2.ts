// IF STATMENT
//SYNTAX
//IF(CONDITION){CODE BLOCK

//}

//CONTOH
const age: number=20;

if(age >=17){
    console.log("anda bisa membuat ktp");   
}
  
// =========ELSE STATEMENT
//BACK UP PLAN DARI IF STATEMENT
//contoh
const age1: number=10;
if(age1>=17){
    console.log("anda bisa membuat ktp");    
}else{
    console.log("anda belum bisa membuat ktp");  
}

//ELSE IF STATEMENT(BISA DIPAKAI BERULANG KALI)
//CONTOH
const input: string="B"
const grade: string=input.toLowerCase(); //jika menggunakan grade bisa memakai huruf kapital ataupun tidak

if (grade==="a"){
    console.log("nilai bagus");    
}else if(grade==="b"){
    console.log("nilai lumayan");
}else if(grade==="c"){
    console.log("nilai buruk"); 
}else{
    console.log("nilai tidak diketahui");   
}

//======= switch case
//contoh
const day: string="senin";

switch(day){
    case "senin":
        console.log("hari senin");
    break;
    case "selasa":
        console.log("harin selasa");
    break;
    case "rabu":
        console.log("hari rabu");
    break;
    default:
        console.log("hari tidak ditemukan");
    break;
}

//====LOGICAL OPERATOR
// $$ -> DAN
// || -> OR
// ! -> NOT

// OR ->kalau salah 1 ada yang nilai true akan menghasilkan nilai true
const car: string="mercy";

if(car==="bmw" || car==="mercy"){
    console.log("mobil jerman");
}else{
    console.log("mobil jepang");  
}

//and -> harus keduanya bernilai true agar menghasilkan nilai true
const umur: number=19;
const punyaSIM: boolean=true;

if(umur>=18 && punyaSIM === true){
    console.log("boleh bawa kendaraan");
}else{
    console.log("tidak boleh bawa kendaraan");
}

//not -> membalikkan nilai boolean
const isSunny: boolean=false;
const isRunning: boolean=!isSunny;

console.log(isSunny);
console.log(isRunning);

//===== TERNARY OPERATOR
//SHORTCUT UNTUK IF ELSE CONDITION
//CONDITION ? TRUE:FALSE

const str: string="typescript";

if(str==="javascript"){
    console.log("javascript");
}else{
    console.log("not javascript");    
}

console.log(str==="javascript"?"javascript":"not javascript");

console.log(str==="javascript"?"javascript":str==="typescript"?"typescript":"not found");


//==========LOOP STATEMENT(PERULANGAN)
//RANGKAIAN INTRUKSI YG DILAKUKAN BERULANG KALI HINGGA KONDISINYA TIDAK TERPENUHI
//TYPE LOOP:FOR LOOP,WHILE LOPP,DAN DO WHILE LOOP
//FOR LOOP -> MEMPUNYAI 3 STATEMENT
//STATEMENT 1: MENGINISIALISASIKAN VARIABLE DARI LOOPING ITU SENDIRI
//STATEMENT 2:MENDIFINE KONDISI DARI LOOPING TERSEBUT
//STATEMENT 3:KODE YG DIEKSEKUSI DIAKHIR SETIAP ITERASI

//SYNTAX :FOR(STATEMENT1;STATEMENT2;STATEMENT3){
// CODE BLOCK YG AKAN DIULANG-ULANG
//}

for(let i=0;i<5;i++){
    console.log("hello word");
}

//while loop -> melakukan perulangan tpi diawal
let i: number=1;

while(i<10){
    console.log("hello word");
    i++;
}

//do while loop

let count: number=1;
do{
    console.log("ini iterasi ke:"+count);
    count++
}while (count<=5)


//===========break
//untuk menghentikan loop

let sum: number=0;
while(true){
    console.log("sum:"+sum);
    
    if(sum>=5)break;

    sum++;
}

//=========continue
//melakukan skip pada looping


for (let i=0;i<5;i++){
    if(i===3) continue;
    console.log(i);  
}