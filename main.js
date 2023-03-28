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
 const max_v1 = function max_sum(a,b) {
  return a + b;
 };

const amount_new3 = max_v1(2,3);

// Variation 4
 const max_v2 = function(a,b) {
  return a + b;
 };

const amount_new4 = max_v2(2,3)

// Variation 5
 const max_v3 = (a,b) => {
  return a + b;
 };

const amount_new5 = max_v3(2,3)

console.log(amount,amount_new1,amount_new2,amount_new3,amount_new4,amount_new5); 





















