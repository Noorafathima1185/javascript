products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

console.log('------------------------------------');

//1. print product name only
console.log('print product name only:');

/* for(data of products){
    console.log(data.pName);
} */

products.forEach(pro=>{
    console.log(pro.pName);
})

console.log('----------------------------------');

//2. print all mobile details whose display is lcd
console.log('print all mobile details whose display is lcd:');

/* for(data of products){
    if(data.display=='lcd'){
        console.log(data);
    }
} */

products.filter(pro=>pro.display=='lcd').forEach(item=>console.log(item))

console.log('--------------------------------------');

//3. print 5g mobile phone name
console.log('print 5g mobile phone name:');

/* for(data of products){
    if(data.band=='5g'){
        console.log(data.pName);
    }
} */

products.filter(pro=>pro.band=='5g').forEach(item=>console.log(item))

console.log('-----------------------------------------');

//4. sort mobile based on price
console.log('sort mobile based on price:');

products.sort((a,b)=>a.price-b.price).forEach(items=>console.log(items.pName))

console.log('-----------------------------------------');

//5. print costly mobile
console.log('print costly mobile:');

costly = products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(costly.pName);

console.log('-----------------------------------------');

//6. print low cost mobile
console.log('print low cost mobile:');

costly = products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(costly.pName);

console.log('-----------------------------------------');