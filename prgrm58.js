fruits=['apple','pineapple','mango','orange','kiwi']

console.log('----------------------------------');

// find mango from the given array
m=fruits.find(f=>f=='mango')
console.log(m);
console.log('----------------------------------');

// is mango present in the array
b=fruits.includes('mango')
console.log(b?'yes':'no');
console.log('----------------------------------');

// find the index of mango
a=fruits.indexOf('mango')
console.log(a);
console.log('----------------------------------');

// find the index of kiwi
a=fruits.indexOf('kiwi')
console.log(a);
console.log('----------------------------------');