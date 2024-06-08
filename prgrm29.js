// pattern printing

// # # # #
// # # # #
// # # # #
// # # # #

// w.a.p to print the given pattern

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+'#'
    }
    console.log(str);
}
console.log('----------------------------');


// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+row+' '
    }
    console.log(str);
}
console.log('----------------------------');


// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+col+' '
    }
    console.log(str);
}
console.log('----------------------------');


// *
// * *
// * * *
// * * * *

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('----------------------------');


// 1
// 2 2
// 3 3 3
// 4 4 4 4 

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+row+' '
    }
    console.log(str);
}
console.log('----------------------------');

// 1 
// 1 2
// 1 2 3 
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+col+' '
    }
    console.log(str);
}
console.log('----------------------------');

// * * * *
// * * * 
// * * 
// *

for(row=4;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('----------------------------');


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * * 
// * * 
// *

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
for(row=5;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('----------------------------');


//    *
//   * * 
//  * * *
// * * * *

for(row=1;row<=4;row++){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('----------------------------');


// * * * *
//  * * *
//   * * 
//    *

for(row=4;row>=1;row--){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}

console.log('----------------------------');


//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(row=1;row<=4;row++){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
for(row=5;row>=1;row--){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('----------------------------');



//       *
//     *   * 
//   *       *
// * * * * * * *


for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str=str+'* '
        }
        else{
            str=str+"  "
        }
    }
    console.log(str);
}

console.log('----------------------------');



// * * * * *
// *       * 
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(row==1 || col==1 || row==5 || col==5){
            str=str+'* '
        }
        else{
            str=str+"  "
        }
    }
    console.log(str);
}
console.log('----------------------------');

// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
            str=str+' 1'
        }
        else{
            str=str+" 0"
        }
    }
    console.log(str);
}
console.log('----------------------------');

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
//   * * * *
//    * * *
//     * *
//      *
for(row=1;row<=10;row++){ 
    str=""
    if(row<5){ 
       for(space=5;space>row;space--){ 
           str+=" "
        }
       for(col=1;col<=row;col++){
           str+=" *"
        }
    }
    else{
        for(space=6;space<=row;space++){
            str+=" "
        }
        for(col=10;col>row;col--){
            str+=" *"
        }
    }
    console.log(str);
}