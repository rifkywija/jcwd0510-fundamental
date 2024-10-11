// // DATA STRUCTURE
// Struktur data, pada tingkat tinggi, adalah teknik
// untuk menyimpan dan mengatur data yang menyusunnya
// lebih mudah untuk dimodifikasi, dinavigasi, dan diakses. Data
// struktur menentukan bagaimana data dikumpulkan, itu
// fungsi yang dapat kita gunakan untuk mengaksesnya, dan
// hubungan antar data.
// Struktur data digunakan di hampir semua bidang
// ilmu komputer dan pemrograman, dari
// sistem operasi hingga kecerdasan buatan.



//Stack -> LIFO(last in first out)
class Stack{
    #container: any[];
    maxSize: number;

    constructor(){
        this.#container = [];
        this.maxSize = 10;
    }

    private isFull(){
        return this.#container.length >= this.maxSize
    }

    private isEmpety(){
        return this.#container.length === 0;
    }

    push (element: any){
        if (this.isFull()){
            return "Container penuh";
        }
        this.#container.push(element);
    }

    pop(){
        if(this.isEmpety()){
            return "Container kosong!";
        }
        this.#container.pop();
    }

    showContainer(){
        return this.#container;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

console.log(stack.push(1));
console.log(stack.push(1))

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.showContainer());


//Queue ->fifo(first in first out)
// Antrian adalah struktur data abstrak
// mirip dengan Tumpukan. Tidak seperti tumpukan, antrian terbuka di
// kedua ujungnya. Salah satu ujungnya selalu digunakan untuk memasukkan data
// (enqueue) dan yang lainnya digunakan untuk menghapus data
// (de antrian).
// Antrian mengikuti metodologi First-In-First-Out, yaitu,
// item data yang disimpan terlebih dahulu akan diakses terlebih dahulu.

class Queue {
    #container: any[];
  
    constructor() {
      this.#container = [];
    }
  
    enqueue(element: any) {
      return this.#container.push(element);
    }
  
    dequeue() {
      return this.#container.shift();
    }
  
    showContainer() {
      return this.#container;
    }
  }
  
  const queue = new Queue();
  
  console.log(queue.enqueue(1));
  console.log(queue.enqueue(2));
  console.log(queue.enqueue(3));
  console.log(queue.enqueue(4));
  console.log(queue.enqueue(5));
  
  console.log(queue.showContainer());
  
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  
  console.log(queue.showContainer());
  
  // SET -> only unique value ========================================
  
  const fruits: string[] = ["banana", "apple", "mango", "apple", "apple"];
  
  const mySet = new Set(fruits);
  
  console.log(mySet);
  
  // menambahkan data ke dalam Set
  mySet.add("grape");
  
  console.log(mySet);
  
  // mengecek apakah di dalam set ada value yg kita cari
  console.log(mySet.has("apple"));
  
  // delete data
  console.log(mySet.delete("grape"));
  
  // looping isi Set
  for (const value of mySet) {
    console.log(value);
  }
  
  // menghitung jumlah data yang ada
  console.log(mySet.size);
  
  // Map ==================================================
  
  const myMap = new Map();
  
  myMap.set("David", "123");
  myMap.set("Joko", "321");
  
  for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
  }
  
  console.log(myMap.size);
  console.log(myMap.get("David"));
  console.log(myMap.get("Joko"));
  console.log(myMap.has("Joko"));
  console.log(myMap.delete("Joko"));
  console.log(myMap.has("Joko"));

