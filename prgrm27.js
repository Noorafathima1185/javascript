// w.a.p to check a given number is prime or not
// have 2 factors 1 and number itself      5->1&5

num=6
isPrime=true
for(i=2;i<num;i++){
    if(num%i==0){
     isPrime=false
     break
    }
}

isPrime?console.log('prime'):console.log('not prime');

/* if(isPrime){
    console.log('prime');
}
else{
    console.log('not prime');
} */