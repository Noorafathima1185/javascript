// w.a.p to find the reverse of a number

num=123
rem=0
rev=0
console.log('the given number is',num);
while(num>0){
    rem=num%10
    rev=(rev*10)+rem
    num=Math.floor(num/10)
}
console.log('the reverse of the given number is',rev);