// 2     3          4                 5 
// 24    369        4936              61725


// 2*12  3*123      4*1234            5*12345

n=2
i=1
str=""
pro=0
while(i<=n){
    str=str+i
    i++
}
pro=n*str
console.log(pro);

// 2+22  3+33+333   4+44+444+44444    5+55+555+5555+55555

m=5
j=1
str=""
sum=0
while(j<=m){
    str=str+m
    sum=sum+Number(str)
    j++
}
console.log(sum);