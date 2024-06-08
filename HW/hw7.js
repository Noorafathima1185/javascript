// 3) Sample data with nested arrays 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

console.log('-----------------------------------------');

// 1) Find the sum of all numbers in the nested arrays.
console.log('sum of all numbers');
sum = data.flat(1).reduce((item1,item2)=>item1+item2)
console.log(sum);
console.log('-----------------------------------------'); 

// 2) Find the maximum number in the entire nested array.
console.log('maximum number in the entire nested array');
max = data.flat(1).reduce((item1,item2)=>item1>item2?item1:item2)
console.log(max);
console.log('-----------------------------------------');

// 3) Find the average of all numbers in the nested arrays.
console.log('average of all numbers');
avg = data.flat(1).reduce((item1,item2)=>item1+item2/2)
console.log(avg);
console.log('-----------------------------------------');

//  4) Find square of each number in the nested arrays.
console.log('square of each number');
sq = data.flat(1).map(item=>item**2)
console.log(sq);
console.log('-----------------------------------------');

//  5) Find all even numbers from the nested arrays.
console.log('all even numbers from the nested arrays');
even = data.flat(1).filter(item=>item%2==0)
console.log(even);
console.log('-----------------------------------------');

// 6) Use reduceRight to concatenate all nested arrays in reverse order.

// 7) create a flattened array from the nested arrays.
console.log('flattened array');
flat=data.flat(1)
console.log(flat);
console.log('-----------------------------------------');

// 8) check if the number 5 is present in any of the nested arrays
console.log('if the number 5 is present?');
five = data.flat(1).some(item=>item==5)
console.log(five?'yes':'no');
console.log('-----------------------------------------');

// 9) create a single string of all numbers separated by a comma. 
console.log('single string of all numbers separated by a comma');
str = data.toString(',')
console.log(str);
console.log('-----------------------------------------');

//  10) Print each number in the nested arrays.
console.log('each number');
data.flat(1).forEach(item=>{console.log(item);})
console.log('-----------------------------------------');

// 11) Sort the nested arrays based on the sum of their numbers.
console.log('Sort the nested arrays based on the sum of their numbers');
sum = data.map(num=>num.reduce((num1,num2)=>num1+num2)).sort((num1,num2)=>num1-num2)
console.log(sum);
console.log('-----------------------------------------');

// 12) Use map to get the product of the first and last number in each nested array.
console.log('Use map to get the product of the first and last number in each nested array');
pro = data.map(pro=>pro[0]*pro[2])
console.log(pro);
console.log('-----------------------------------------');

// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
console.log('Use filter to get all arrays where the sum of numbers is greater than 15');
array = data.filter(item=>item.reduce((item1,item2)=>item1+item2)>15)
console.log(array);
console.log('-----------------------------------------');

// 14) Use reduce to find the product of all numbers in the nested arrays.
console.log('Use reduce to find the product of all numbers in the nested arrays');
pro = data.reduce((item1,item2)=>item1*item2)
console.log(pro);
console.log('-----------------------------------------');

//  15) create an array of square roots of all numbers in the nested arrays.
console.log('square roots of all numbers');
sq=data.flat(1).map(item=>item**2)
console.log(sq);
console.log('-----------------------------------------');

// 16) Use includes to check if the number 20 is present in any of the nested arrays.
console.log('if the number 20 is present in any of the nested arrays');
twenty = data.flat(1).includes(20)
console.log(twenty?'yes':'no');
console.log('-----------------------------------------');

// 17) Use map to convert each number in the nested arrays to its string representation.
console.log('Use map to convert each number in the nested arrays to its string representation');
str=data.map(item=>item.toString(''))
console.log(str);
console.log('-----------------------------------------');

// 18) Use filter to get all arrays where the length is greater than 2
console.log('Use filter to get all arrays where the length is greater than 2');
len=data.flat(1).filter(item=>item>2)
console.log(len);

// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.

//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.

// 21) Sort the nested arrays based on the length of each array.

// 22) Use map to convert each number in the nested arrays to its negative.

// 23) Use filter to get all arrays where the last number is greater than 10.
console.log('Use filter to get all arrays where the last number is greater than 10');
ten = data.filter(item=>item[2]>10)
console.log(ten);
console.log('-----------------------------------------');

//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.

// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
console.log('square roots of all even numbers');
Array.from(data.flat(1).filter(num=>num%2==0).map(num=>num**2)).forEach(item=>{console.log(item);})
console.log('-------------------------------------------------');

//  26) Use includes to check if the number 15 is present in any of the nested arrays.
console.log('if the number 15 is present');
fifteen=data.flat(1).includes(12)
console.log(fifteen?'yes':'no');
console.log('-----------------------------------------------');

// 27) Use map to convert each number in the nested arrays to its absolute value.

// 28) Use filter to get all arrays where the first number is less than 5.
console.log('all arrays where the first number is less than 5');
five = data.filter(num=>num[0]<=5)
console.log(five[0]);
console.log('------------------------------------------------');

// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.

// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays. 