# JS-lesson4-2
JS Lesson 4-2

## Creation function

```javascript
// Example 1
const sum = (a,b) => {
  const result = a + b;
  return result;
};

const amount = sum(2,3);

// Variation 1
 const sum_v1 = (a,b) => {
  return a + b;
 };

const amount_new1 = sum_v1(2,3);

// Variation 2
 function sum_v2(a,b) {
  return a + b;
 };

const amount_new2 = sum_v2(2,3);

// Variation 3
 const sum_v3 = function sum_v3(a,b) {
  return a + b;
 };

const amount_new3 = sum_v3(2,3);

// Variation 4
 const sum_v4 = function(a,b) {
  return a + b;
 };

const amount_new4 = sum_v4(2,3)

// Variation 5
 const sum_v5 = (a,b) => {
  return a + b;
 };

const amount_new5 = sum_v5(2,3)

// Variation 6
  const sum_v6 = (a,b) => a + b;

const amount_new6 = sum_v6(2,3);

console.log(amount,amount_new1,amount_new2,amount_new3,amount_new4,amount_new5,amount_new6); 
```
____
____

##Call Function
```javascript
//Variation 1
const sum_v1 = (a = 0, b = 0) => {
 return a + b;
};

sum_v1(6,5);   // return 11
sum_v1(6);    // return 6
sum_v1();    // retunr 0

//Variation 2

const sum_v2 = (a,b) => {
  return a + b;
};

sum_v2(6,5);  // return 11
sum_v2(5);    // return NaN
sum_v2();     // return NaN

//Variation 3

const sum_v3 = (...args) => {
  return args[0] = args[1];
};
```
____
____

##let variables and function
```javascript
let level1 = 5;
  console.log(level1);  //  5

const fun_1 = () => {
 let level1 = 4;
   console.log(level1);  // 4
 {
   let level1 = 3;
   console.log(level1);  // 3
 }
 
   console.log(level1);  // 4
};




 let level2 = 5;
  console.log(level2);   // 5

 const fun_2 = () => {
  console.log(level2);   // 5
  {
    let level2 = 3;
  console.log(level2);   // 3
  }
  console.log(level2);   // 5
 };





 let level3 = 5;
  console.log(level3);   // 5

 const fun_3 = () => {
  console.log(level3);   // 5
  {
  console.log(level3);   // 5
  }
  console.log(level3);   // 5
  };



let level4 = 5;
  console.log(level4);   // 5

 const fun_4 = () => {
  let level4 = 4
  console.log(level4);   // 4
  {
  console.log(level4);   // 4
  }
  console.log(level4);   // 4
};



let level5 = 5;
  console.log(level5);   // 5

 const fun_5 = () => {
  console.log(level5);   // 5
  {
  let level5 = 3
  console.log(level4);   // 3
  }
  console.log(level4);   // 3
};

```
