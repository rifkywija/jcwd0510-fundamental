// // //NO 1 
// // const lenght:number =5
// // const widht:number =3

// // console.log(lenght*widht);

// // //NO 2
// // console.log((lenght*2)+(widht*2));

// // // NO 3
// // const radius:number=5

// // console.log(radius * 2);
// // console.log(2*(22 / 7)*radius);
// // console.log((22 / 7)*(radius**2));

// // // NO 4
// // const a:number=80
// // const b:number=65
// // console.log((180-(a+b)));

// // //NO 5
// // const n: number = 400;
// // console.log(Math.round(n/365)); //year
// // const month: number=(Math.round((n/30)-12));
// // console.log(month); //month
// // const days: number=((n%365)% 30);
// // console.log(days); //days

// // const y: number =366;
// // console.log(Math.round(y/366)); //year
// // const month2: number=(Math.round((y/30)-12))
// // console.log(month2); //month
// // const days2: number=((y%365)% 30)
// // console.log(days2); //days


// // //NO 6
// // const date1: Date =new Date();
// // date1.setDate(20);
// // date1.setMonth(1);
// // date1.setFullYear(2022);

// // console.log(date1);

// // const date2: Date =new Date();
// // date2.setDate(22);
// // date2.setMonth(1);
// // date2.setFullYear(22);





// // NO2





// // No 3
// // const radius: number=14;
// // const diameter: number=2*radius;
// // const circumference: number=2*3.14;
// // const area: number=3.14*radius*radius;

// // console.log(`diameter:${diameter},circumference:${circumference},area:${area}`);

// // No 4
// // const a: number=80;
// // const b: number=65;
// // const c: number=180-(a+b);
// // console.log(`c:${c}`);

// // NO 5
// // const hari: number=400;
// // const tahun: number=Math.floor(hari/365);
// // const bulan: number=Math.floor((hari%365)/30);
// // const tanggal: number=Math.floor((hari%365)%30);
// // console.log(`${tahun} tahun, ${bulan} bulan, ${tanggal} tanggal`);

// // No 6
// const date1: Date=new Date("2024-01-01");
// const date2: Date=new Date("2024-10-10");
// const bedatanggal: number=Math.abs(date1.getTime() - date2.getTime()); 
// const bedahari: number=bedatanggal/(1000*3600*24); 

// console.log(`perbedaan hari dari tanggal pertama dan kedua:${bedahari}`);