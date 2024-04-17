// w.a.p to display all prime numbers from 2 to 50

for(i=2;i<=50;i++){
    let flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break
        }
    }
    if(i>0 && flag==0){
        console.log(i);
    }
}
console.log('---------------------------------');

// w.a.p to display all armstrong numbers between 8-500

for (num=8; num<=500; num++){
    power=(num+'').length
    temp=num
    sum=0
    if(power!=1){
        while(temp>0){
            rem=temp%10 
            sum=sum+rem**power 
            temp=Math.floor(temp/10)
        }
    }
    else{
        sum=0
    }
    if(sum==num){
        console.log(num);
    }
}