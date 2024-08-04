// Go to readme
console.log("This is a typescript code");
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var obj = new Test();
var firstName = "surendra";
console.log("type of obj is :", typeof obj, "and type of firstName is :", typeof firstName);
//op :
// This is a typescript code
// 01_intro.js:10 type of obj is : object and type of firstName is : string
firstName = "ram";
console.log(firstName); // op : ram
firstName = 23;
console.log(firstName);
