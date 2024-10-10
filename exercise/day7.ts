// // NO 1
// // MEMBUAT FUNGSI UNTUK MEMERIKSA APAKAH DUA OBJEK SAMA 
// function areObjectsEqual(obj1, obj2) {
 
//     const obj1Keys = Object.keys(obj1);
//     const obj2Keys = Object.keys(obj2);
  
//     if (obj1Keys.length !== obj2Keys.length) {
//       return false;
//     }
  
//     for (let key of obj1Keys) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
  
//     return true;
//   }

//   console.log(areObjectsEqual({ a: 2 }, { a: 1 })); 
//   console.log(areObjectsEqual({ a: "Hello" }, { a: 1 })); 
//   console.log(areObjectsEqual({ a: 1 }, { a: 1 })); 
  
// //NO 2
// //MEMBUAT FUNGSI UNTUK MENDAPATKAN PERPOTONGAN DUA OBJEK

// function getIntersection(obj1, obj2){
//     const intersection = {};

//     for (let key in obj1){
//         if(obj1[key] ===obj2[key]){
//             intersection[key] = obj1[key]
//         }
//     }
//     return intersection;
// }

// const obj1 = {a: 1, b: 2 };
// const obj2 ={a: 1, c: 3};

// const result = getIntersection(obj1,obj2)
// console.log(result);


// // NO 3
// // MEMBUAT FUNGSI UNTUK MENGGABUNGKAN DUA ARRAY DATA SISWA DAN MENGHAPUS DATA DUPLIKAT



// // NO 4
// // MEMBUAT FUNGSI YANG DAPAT MENERIMA INPUT SEBAGAI ARRAY OBJEK DAN MENGALIHKAN
// //SEMUA NILAI KE DALAM PROPERTI DAN PROPERTI MENJADI NILAI
// //pakai for in trs buat variabel penampung berupa object

// function swapKeysAndValues(arr){
//     return arr.map(obj => {
//         let swapped = {};
//         for(let key in obj){
//             swapped[obj[key]]=key;
//         }
//         return swapped;
//     })
// }

// const input = [{name:`David`,age:20}];
// const output = swapKeysAndValues(input)

// console.log(output);
// // NO 5
// function factorial(n) {
//     if(n == 0 || n == 1 ) {
//         return 1;
//     }else {
//     return  n * factorial(n-1);  
//     }   
// }
// console.log(factorial(5))


//cara dari mas renhard


// No 1
const checkObjectEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 1 };
console.log(checkObjectEqual(obj1, obj2));

// No 2
const intersection = (obj1: any, obj2: any) => {
  let duplicate = {};

  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }

  return duplicate;
};

const obj3 = { a: 1, b: 2, c: 10 };
const obj4 = { a: 1, b: 2, c: 1 };
console.log(intersection(obj3, obj4));

// No 3
interface Student {
  name: string;
  email: string;
}

const combineArray = (arr1: Student[], arr2: Student[]) => {
  const combineArray = [...arr1, ...arr2];
  const temp: Student[] = [];

  for (let i = 0; i < combineArray.length; i++) {
    const existingStudent = temp.find(
      (value) => value.email === combineArray[i].email
    );

    if (!existingStudent) {
      temp.push(combineArray[i]);
    }
  }

  return temp;
};

const array1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const array2: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(combineArray(array1, array2));

// No 4

const switchKeyToValue = (data: any[]) => {
  const result: any[] = [];

  data.forEach((item) => {
    let temp: any = {};

    for (let key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  });

  return result;
};

console.log(
  switchKeyToValue([
    { name: "David", age: 20 },
    { name: "David", age: 20 },
  ])
);

// No 5
const factorial = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);
    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial(5);
console.log(steps.join(" x ") + " = " + total);