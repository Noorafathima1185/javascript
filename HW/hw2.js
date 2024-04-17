// w.a.p to find the second largest among 3 number and arrange them in descending order 

n1=100
n2=500
n3=300

if (n1>n2){
    if (n2>n3){
        console.log(`second largest is ${n2}`);
        console.log(`descending order : ${n1} , ${n2} , ${n3}`);
    }
    else{
        console.log(`second largest is ${n3}`);
        console.log(`descending order : ${n1} , ${n3} , ${n2}`);
    }
}
else if (n2>n1){
    if (n1>n3){
        console.log(`second largest is ${n1}`);
        console.log(`descending order : ${n2} , ${n1} , ${n3}`);
    }
    else{
        console.log(`second largest is ${n3}`);
        console.log(`descending order : ${n2} , ${n3} , ${n1}`);
    }
}
else if (n3>n1){
    if (n1>n2){
        console.log(`second largest is ${n1}`);
        console.log(`descending order : ${n3} , ${n1} , ${n2}`);
    }
    else{
        console.log(`second largest is ${n2}`);
        console.log(`descending order : ${n3} , ${n2} , ${n1}`);
    }
}
else{
    console.log(`all are equal`);
}