// Go to readme

console.log("This is a typescript code");

class Test{}

let obj : Test = new Test();

let firstName = "surendra";

console.log("type of obj is :",typeof obj, "and type of firstName is :", typeof firstName);

//op :
// This is a typescript code
// 01_intro.js:10 type of obj is : object and type of firstName is : string

firstName = "ram";
console.log(firstName); // op : ram

firstName = 23;
console.log(firstName); // It will print 23 , but with error

// err :
//rror TS2322: Type 'number' is not assignable to type 'string'.

