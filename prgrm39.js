// array

weekdays = ['mon','tue','wed','thu']

// display an array
console.log(weekdays);

// total no.of items in an array
console.log(weekdays.length);

// print wed from the given array
console.log(weekdays[2]);

// print thu from the given array
console.log(weekdays[3]);

// add friday to a given array
// push to add
weekdays.push('fri')
console.log(weekdays);

// add 3 to the given array
weekdays.push(3)
console.log(weekdays);

// remove 3 from the given array
weekdays.pop(3)
console.log(weekdays);

// add sunday to the given array
weekdays.unshift('sun')
console.log(weekdays);

// to add  sat to the start of an array
weekdays.unshift('sat')
console.log(weekdays);

// to remove an item from start of an array
weekdays.shift()
console.log(weekdays);