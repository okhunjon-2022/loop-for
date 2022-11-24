// const [bmw,mers, ...rest] = ["BMW","Mers","Audi","Volva","Ford"];
// console.log(rest);
// console.log(mers);

// const x = [1, 2, 3, 4, 5];
// const [y, z, e] =[1, 2, 3, 4, 5] ;
// console.log(y); // 1
// console.log(z); // 2
// console.log(e); // 2

// const {name="Ibrohim",lastName,...boshqaMalumotlar}={

//     lastName:"Makhmudov",
//     age:24,
//     from:"Uzbekistan",
//     job:"Web developer"
// }
// console.log(name,boshqaMalumotlar);

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// // is equivalent to:
// // const a = obj.a;
// // const b = obj.b;
// console.log(a);
// const obj = { a: 1, b: { c: 2 } };
// const { a, b: { c: d } } = obj;
// // Two variables are bound: `a` and `d`
// console.log(a,b);

// let a = 1;
// let b = "10.4";
// console.log(a + parseInt(b));

// let a = 10;
// a +=10;
// console.log(a);
// let a = 11;
// let b = "11";
// console.log(a===b);

// let a = "A";
// let b = "B";
// console.log(a === b);

/// Logical operations

// let info = [
//   {
//     id: 1,
//     name: "Nigina",
//     age: 18,
//   },
//   {
//     id: 2,
//     name: "Sardor",
//     age: 22,
//   },
//   {
//     id: 3,
//     name: "Bekzod",
//     age: 19,
//   },
//   {
//     id: 4,
//     name: "Obit",
//     age: 17,
//   },
//   {
//     id: 5,
//     name: "Umat",
//     age: 26,
//   },
// ];

// for (let index = 0; index <= 10; index++) {
//     // console.log(index);
//     for (let l = 0; l <= 10; l++) {
//         console.log(index   );

//     }

// }

// function calculate(array) {
//     return array.length == 0 ? 0 : array.reduce((a,b)=> a + b ) /array.length

// }

// console.log(calculate[1,2,3,4,5]);
// function makeUpperCase(str) {
//     // Code here
//     return str.toUpperCase()
//   }

//   console.log(makeUpperCase("ohunjon"));
//   const makeUpperCase1 = (str)=>{str.toUpperCase();}
// function feast(beast,dish) {
//     return beast[0]===dish[0] && beast.slice(-1) === dish(-1);
// }
//   console.log(feast("chickade", "chocolate cake"));

// let numenr = [1, 2, 3, 4];
// let cal = numenr.reduce((a,b)=>a+b,0)
// console.log(cal);


// function calculate(a) {
//     return a.reduce((a,b)=>a+ +b,0)
// }

// console.log(calculate([1,2,"3",4]));



// const age = 24
// if (age > 15) {
//     console.log("Siz hali yoshsiz");
// }else if (condition) {
    
// }

// const age = 20

// if (age >= 30) {
//     console.log("Sizninng yoshingiz ancha katta");
// } else if (age < 30 && age >=25){
//     console.log("Siz o'rta yoshlisiz");
// }else if (age < 25 && age >= 15){
//     console.log("Hali yoshsiz");
// }else{
//     console.log("????????????");
// }

// function test(ism,familiya,age) {
     
//     console.log(`Salom ${ism} ${familiya} ${age}`);
// }


// test("Sardor","Makhmudov",19)
// test("Ali", "Usmaonov",24)
// test("Usmon","Saidov",36)
// test("Abu Bakr","Aliyev",48)

// function rett() {
//     let ism1 = "Muhammad"
//     return ism1
// }

// console.log(rett());