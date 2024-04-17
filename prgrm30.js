// * * * * *
//   *   *  
//     *
//   *   *
// * * * * *


for(row=4;row>=2;row--){
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

console.log("-----------------------");

// * * * * *
//   *   *  
//     *
//   *   *
// * * * * *

for(row=1;row<=5;row++){
    str=" "
    for(col=1;col<=5;col++){
        if(row==1 || row==5 ||row+col==6 ||col==row){
            str=str+"*"
        }
        else{
            str=str+" "
        }
    }
    console.log(str);
}
console.log("-----------------------------------");

//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

num=11
for(row=1;row<=5;row++){
    str=" "
    for(space=1;space<=5-row;space++){
        str=str+"   "
    }
    for(col=1;col<=2*row-1;col++){
        str=str+num+" "
        num++
    }
    console.log(str);
}
console.log("---------------------------------");