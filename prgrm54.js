a = [10,11,12,13,14,15]
// w.a.p to find square of each element in the given array

sq = a.map(num=>num**2)
console.log(sq);

for(let num of a){
    console.log(num**2);
}
console.log('-------------------------');

//forEach()
a.forEach(num => {
    console.log(num**2);
});
console.log('-------------------------');


// w.a.p to find the cube of a given number using map
cubes=a.map(num => num ** 3);
console.log("Cubes of the given numbers:", cubes);

// w.a.p to create a new array with number<=13 inc by 1 and number>13 dec by 1
//op = [11,12,13,14,13,14]