//OOP (object oriented programming)
// cara menuliskan object
// cara 1 (lebih sering dipakai)
const user={};

//cara 2(jrng dipakai)
const user2= new Object();


// properties & method

interface user{
    name:string;
    greet: ()=> void;
    greet2: ()=> void;
    hobby: string;
}

const user3= {
    name:"Budi",
    greet(){
    console.log("Hello");
    },
greet2:()=>{
    console.log();
},
};


// add & delete property
const person:any={
    name:"joko",
    age:20
}
console.log(person);
person.hobby="futsal";
console.log(person);
person["address"]="jogja";
console.log(person);


//delete property
delete person.address;
console.log(person);

//accessing value
console.log(person.name);//using dot
console.log(person["hobby"]);//using square bracket

person.hobby="voly";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));


//immutable & mutable
//mutable(variabel yg bisa diubah datanya=primitive data types)
//immutable(object yg tidak bisa diubah saat sudah dibuat=non primitive data types)

//mutable
const count1: number=4;
let count2:number=count1;
count2=10

console.log(count1);
console.log(count2);


//immutable
let orang1:any={name:"budi"};

//let orang2:any=orang1;
let orang2:any={...orang1};

orang2.age=20;
console.log(orang1);
console.log(orang2);


//optional chaining

const user4:any={};

console.log(user4.address);
console.log(user4.address?.city);

//for in
const person3={
    name:"aceng",
    age:90,
};

for(const key in person3){
    console.log(key);
    console.log(person3[key]);  
}

//destucturing assigment
// mengeluarkan property dalam object menjadi sebuah variable
//contoh

const person4={
    name:"aceng",
    age:90,
};

console.log(person4.name);
console.log(person4.age);



//versi destruc array
const array=[10,20];
console.log(array[0]);
console.log(array[1]);

const [a, b]=[10,20]

console.log(a);
console.log(b);


//spread operator
//digunakan untuk copy isi object / menggabungkan object
//kalau ada property yg sma akan menimpa
const objectOne={name: "jacky",password:"Admin123"};
const objectTwo={email:"email@mail.com",name:"pepeng"};

const result = {...objectOne,...objectTwo};

console.log(result);


//this keyword
//mengakses property lain didalam sebuah object

const person5={
    firstName:"aceng",
    lastName:"racing",
    greet(){
        console.log(`hello,${this.firstName} ${this.lastName}`);    
    },
};

person5.greet();


//class (Class are a template for creating objects. They
// encapsulate data with code to work on that data.)
//template / cetakan untuk membuat sebuah object

//class declaration
class User{
    greeting(){
        console.log("Hello world"); 
    }
};

//class expression
const User2=class{
    greeting(){
        console.log("Hello world");
    }
};


//create an object from class
const human = new User();
const human2 = new User();

human.greeting();
human2.greeting();

//constructor
//method bawaan dari class yg akan dijalankan pertama kalo saat kalian 
//membuat object baru menggunakan template class

class Person{
    name:string
    #email:string;

    constructor(name:string,email:string){
        this.name= name;
        this.#email= email;
    }

    greeting(){
        console.log(`Hello ${this.name}`);
        return `Hello ${this.name}`
    }

    //
    private showEmail(){
        console.log(this.#email);
        
    }

    sendReminder(){
        return this.showEmail();
    }
}

const orang3=new Person("Budi","budi@mail.com");

console.log(orang3.greeting());
//orang3.showEmail()//gak bakalan bisa krn showEmail adalah method private
// console.log(orang3.#email); // gabakalan bisa karena email itu dibikin private


//getter & setter
//get ->baca data 
//set->set value didalam object

const orang4={
    firstName:"ujang",
    lastName:"racing",

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        const split = value.split(" ");
        this.firstName=split[0];
        this.lastName=split[1];
    },
    
};

console.log(orang4.fullName);
orang4.fullName="Budi joko";
console.log(orang4.fullName);



//kapan memnggunakan getter dan setter?

//getter berguna ketika ingin mendapatkan nilai properti,tetapi kamu ingin menambahkan
//logika(misalnya,format atau validasi)

//setter berguna ketika ingin memvalidasi atau menambahkan logika sebelum menetapkan nilai ke properti

//gunakan method biasa jika ingin tindakan lebih eksplisit atau jika fungsi tersebut melakukan
//lebih dari sekedar mengambil atau menetapkan nilai properti


//encapsulation
//konsep di oop utk nge bundle data dalam 1 unit
//contohnya adalah class dan object


//inheritance
//pewarisan dari parent class ke child class
//property dan method dari parent class bisa diakses oleh child class

class Product{
    productName: string;
    price:number;

    constructor(name:string,price:number){
        this.productName = name;
        this.price=price;
    }

    readprice(){
        console.log(this.price);
        return "Rp " + this.price.toLocaleString("id-ID");
    }
}

//tidak menggunakan konsep inheritance
// class Book{
//     productName: string;
//     price:number;
//     author:string;

//     constructor(name:string,price:number,author:string){
//         this.productName= name;
//         this.price= price;
//         this.author= author;
//     }
// }


//menggunakan konsep inheritance
class Book extends Product{
    author:string;

    constructor(name:string,price:number,author:string){
        super(name,price);
        this.author=author;
    }
}


//instance of
//mengecek apakah sebuah object memiliki hubungan keclass tertentu

class Animal{}
class Rabbit extends Animal{}
class Tree{}

const rabbit=new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
