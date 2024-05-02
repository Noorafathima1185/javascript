console.log('------------------------------------');

arr = [101,'anu','developer','kochi',30000,1]



employee = {
    id:101,
    name:'anu',
    age:25,
    desig:'developer',
    loca:'kochi'
}

console.log(typeof(arr));
console.log(typeof(employee));
console.log('------------------------------------');

// diff method to access values stored in a key
console.log(arr[2]);
console.log(employee['desig']);
console.log(employee.name);

console.log('--------------------------------');


// how to access a key from a object

// in method is used to follow the keys in the object.

for(let key in employee){
    console.log(key);
}

console.log('--------------------------------');

// w.a.p to check whether 'emplocation' key is present in the given object

if('loca' in employee){
    console.log('present');
}
else{
    console.log('not present');
}

console.log('------------------------------------');

console.log(`emplocation key is ${'loca' in employee? 'present':'not present'}`);

console.log('------------------------------------');


// how to add a key:value pair into an object
// objectname["key"]=value

// add experience to the given object employee

employee["exp"]=3
console.log(employee);

console.log('------------------------------------');


// check 'gender' key in the given employee. if present 'yes' else add gender key to the given object with value as male



if('gender' in employee){
    console.log('present');
}
else{
    employee["gender"]='male'
    console.log(employee);
}

console.log('------------------------------------');

'gender' in employee?console.log('present'):( employee["gender"]='male',console.log(employee))

console.log('------------------------------');


// update a value in a object

employee.age+=5
console.log(employee);

console.log('---------------------------------');

// delete a key from an object
// delete method - return boolean value

delete employee.age
console.log(employee);
