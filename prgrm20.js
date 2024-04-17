// w.a.p to check whether a given number is palindrome or not  eg:121

num=123
rem=0
rev=0
temp=num

console.log('the given number is',num);
while(num>0){
    rem=num%10
    rev=(rev*10)+rem
    num=Math.floor(num/10)
}
if(temp==rev){
    console.log('number is palindrome');
}
else{
    console.log('number is not palindrome');
}

/* temp==rev? console.log('number is palindrome'):console.log('number is not palindrome'); */