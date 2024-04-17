// a = [10,20,30,20,30,40,50,60,10]
// w.a.p to find the duplicate number from the given array = 10,20,30

a = [100,200,300,20,30,40,50,60,10]

/* isDuplication = false
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j]){
            isDuplication=true
            console.log(a[i]);
        }
    }
}
!isDuplication && console.log('no duplication'); */

b = []
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        isDuplicate=true
        if(a[i]==a[j]){
            // variable initialization
            isDuplicate = false
            // checking whether the number is there in output array
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){ // if present number is not added
                isDuplicate=true
                break
                }
            }
            if(!isDuplicate){// not present in output array the number is added to the output array
                b.push(a[i])
            }
        }
    }
}

b.length==0?console.log('no duplication'):console.log(b);


c=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j] && !b.include(a[i])){
            
        }
    }
}