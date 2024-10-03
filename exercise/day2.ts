//No 1
// mencari kode untuk memeriksa apakah bilangan tersebut ganjil atau genap
const angka: number=8;

if(angka %2==0){
    console.log("even");    
}else{
    console.log("odd");   
}

//No2
// mencari kode untuk memeriksa apakah bilangan tersebut bilangan prima atau bukan
const number: number=6;
let isPrime: boolean =true;

if (number === 1){
    console.log("1 is not a prime number");
}
else if(number > 1){
     
    for(let i =2;i<= number/2;i++){
        if(number% i==0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} bilangan prima`);
    } else {
        console.log(`${number} bukan bilangan prima `);
    }
}

//No 3
// cari kode untuk mencari jumlah bilangan 1 sampai n
const N: number=3;
let sum: number=0;
for(let i=1;i<=N;i++){
    sum+=i
}
    console.log(sum);
//No 4
// mencari kode untuk mencari faktorial suatu bilangan
 const number2: number=6;
if(number<0){
    console.log();
}
else {
    let fact = 1;
    for (let i = 1; i <= number2; i++) {
        fact *= i;
    }
    console.log(`faktorial dari ${number2} adalah ${fact}.`);
}
//No 5
//mencari kode untuk mencetak n angka fibonacci pertama
const number3: number=16;
let n1 = 0,n2 =1,nextTerm;
for(let i =1;i<=number3;i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm
}

console.log();1
console.log();1
