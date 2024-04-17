// nested array

a = [[2,10],[50,25],[2,100],[7,66],[33,9]]

// w.a.p to find the numbers less than or equal to 10

for(let num of a){
    for(let n of num){
        if(n<=10){
            console.log(n);
        }
    }
}
console.log("---------------------------------");

// w.a.p to find even numbers from the given array

for(let num of a){
    for(let n of num){
        if(n%2==0){
            console.log(n);
        }
    }
}