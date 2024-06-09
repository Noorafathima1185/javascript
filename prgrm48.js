arr =[ 10,11,12,3,2,4 ]
// sort the array in ascending order

// algorithm
// get the search item
searchItem = 2
// initialization lower index and upper index
low = 0
up = arr.length - 1
isPresent = false
// sort the given array
arr.sort((a,b)=>a-b)
console.log(arr);
count=0


// repeat the above statement until the low and up value meets.
while(low<=up){ // mid= low+up/2
    count++
    mid = Math.floor((low + up)/2)

    // -mid = search item
    // item found the display

    if (arr[mid]== searchItem){
        isPresent = true
        break
    }

    // - mid > search item
    // up = mid-1
    else if ( arr[mid] > searchItem){
        up = mid - 1
    }

    // -mid < search item
    // low = mid+1
    else{
        low = mid + 1
    }
}
console.log(isPresent?'present':'not present');
console.log(count);
// console.log(isPresent?'present':'not present');