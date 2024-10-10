// No 1
//

function segitiga1(height: number) {
    for (let i = 1; i <= height; i++) {
      let row: string = "";
  
      for (let j = 1; j <= i; j++) {
        row += j + " ";
      }
  
      console.log(row);
    }
  }
  


// No 2

function segitiga2(height: number) {
    let currentNumber: number = 1;
    //   let result: string = "";
    for (let i = 1; i <= height; i++) {
      let row: string = "";
  
      for (let j = 1; j <= i; j++) {
        row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
        currentNumber++;
      }
      console.log(row);
      // result += row + "\n";
    }
    //   return result;
  }
  segitiga2(5);
  // console.log(segitiga2(5));
// No 3
function fizzBuzz(n: number) {
    let message: string = "";
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        message += "FizzBuzz" + " ";
      } else if (i % 5 === 0) {
        message += "Buzz" + " ";
      } else if (i % 3 === 0) {
        message += "Fizz" + " ";
      } else {
        message += i + " ";
      }
    }
  
    console.log(message);
  }
  
  fizzBuzz(15);
  

//No 4
// fungsi untuk menghapus semua bilangan ganjil dalam array dan mengembalikan array baru yang berisi bilangan genap
// angka saja
function hapusGanjil(arr) {
    return arr.filter(angka => angka % 2 === 0);
  }
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = hapusGanjil(arr);
console.log(hasil); 

//No 5
//fungsi untuk memisahkan string dan mengubahnya menjadi array kata
const words6: string = "Hello  Word"
const arr5: string[]= words6.split(" ").filter((words6) => words6.length != 0)
console.log(arr5);

