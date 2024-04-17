// w.a.p to create a new array with number<=13 inc by 1 and number>13 dec by 1
//op = [11,12,13,14,13,14]

numbers=[10,11,12,13,14,15];
modnmbr=numbers.map(num => num<=13 ? num+1 : num-1);
console.log("modified array:",modnmbr);