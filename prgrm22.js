// w.a.p whether the given number is armstrong or not
// 153 = 1**3 + 5**3 + 3**3 =153
// 1634 = 1**4 + 6**4 + 3**4 + 4**4 =1634

num=1634
power=(num+'').length
temp=num
rem=0
sum=0
console.log('the given number is',num);
while(num>0){
    rem=num%10 
    sum=sum+rem**power 
    num=Math.floor(num/10)
}
if (temp==sum) {
    console.log('armstrong');
}
else{
    console.log('not armstrong');
}
