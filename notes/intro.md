## What is TypeScript ?
1. superset of javascript
2. shares same syntax as js, but adds some extra to it (strong typing system like java, c++)
3. provides extra capability by adding **type** to js.

## Why to use typescript ?

    ts allow developers to bind the type to variable and function return statements. That helps to remove all all type error during run time.
    e.g : 
**javascript**
```javascript
// no type info with variable 
let name = "surendra";
name = 12;
name = true;

// all the assignment is correct in js(same variable name with different type), but it might give error at runtime 
```

**typescript**

```typescript
// type info is provided while declaring the variable

let name: string = "surendra";

// if we assign other type data to name , then e get error

name = 23; // error
```

suppose we are trying to access any property of object that is not there, then in typescript we will get an error before execution of program itself(i.e at compile time). But in javascript we  will get the error during runtime which is more dangerous.
e.g :

```javascript 
// javascript 

let obj = {
    name : "surendra";

};
console.log(obj.address) // no error at compile time 


// typescript 
let obj = {
    name : "surendra";

};
console.log(obj.address) // error at compile time 

```

>> TypeScript uses compile time checking. Which means it checks if the specified types match before running the code, not whilw running the code.
