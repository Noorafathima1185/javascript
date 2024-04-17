//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('-------------------------------------------------------');
console.log('district having Highest +ve case ');

highposti = covid_data.reduce((cov1,cov2)=>cov1[2]>cov2[2]?cov1:cov2)
console.log(highposti);

console.log('-------------------------------------------------------');

//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');

highfrstdos = covid_data.reduce((cov1,cov2)=>cov1[5]>cov2[5]?cov1:cov2)
console.log(highfrstdos[1]);

console.log('-------------------------------------------------------');

//3. district having lowest death rate
console.log('district having lowest death rate');

lowdeath = covid_data.reduce((cov1,cov2)=>cov1[3]<cov2[3]?cov1:cov2)
console.log(lowdeath[1]);

console.log('-------------------------------------------------------');

//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');

covid_data.sort((a,b)=>b[2]-a[2]).forEach(item=>console.log(item[1]))

console.log('-------------------------------------------------------');

//5. is district with +ve cases > 15000
console.log('is district with +ve cases > 15000');

posicase = covid_data.some(cov=>cov[2]>15000)
console.log(posicase?'yes':'no');

console.log('-------------------------------------------------------');

//6. sort data with 1st dose vaccine ascending order
console.log('sort data with 1st dose vaccine ascending order');

covid_data.sort((a,b)=>a[5]-b[5]).forEach(item=>console.log(item[1]))

console.log('-------------------------------------------------------');

//7. Print Thrissur details
console.log('Thrissur details');

thrissur = covid_data.find(dis=>dis[1]=='Thrissur')
console.log(thrissur);

console.log('-------------------------------------------------------');

//8. Print total number of positive cases
console.log('total number of positive cases');

totalposi = covid_data.map(cov=>cov[2]).reduce((data1,data2)=>data1+data2)
console.log(totalposi)

console.log('-------------------------------------------------------');

//9. Print total number of curred cases
console.log('total number of curred cases');

totalcure = covid_data.map(cov=>cov[4]).reduce((data1,data2)=>data1+data2)
console.log(totalcure)

console.log('-------------------------------------------------------');

//10. Print curred cases in Idukki
console.log('curred cases in Idukki');

idukki = covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);