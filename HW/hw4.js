//  HW - STUDENT OBJECT  - get, add, update, delete

student = {
    id : 2835,
    name : "manu",
    course : "commerce",
    year : 2022-24
}

console.log(student);

console.log('--------------------------------');
//get 
for(let key in student){
    console.log(key);
}

console.log('--------------------------------');
//add
student['mark'] = 89
console.log(student);

console.log('--------------------------------');
//update
student['mark']+=8
console.log(student);

console.log('--------------------------------');
//delete
delete student.year
console.log(student);