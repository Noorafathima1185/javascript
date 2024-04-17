arr = [10,11,12,3,2,4]
// w.a.p to check whether 2 is present or not
searchItem = 2
isPresent = false
count=0
for(num of arr){
    count++
    if(num==searchItem){
        isPresent = true
        break
    }
}
console.log(count);
console.log(isPresent?'present':'not present');