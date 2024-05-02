//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
carBooking.forEach(items=>console.log(items[1]))
totalavail=carBooking.map(car=>car[5]).reduce((n1,n2)=>n1+n2)
console.log(totalavail);
sedan=carBooking.find(item=>item[3]=='Sedan')
console.log(sedan);
