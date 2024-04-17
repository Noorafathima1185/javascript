// splice()

a=['max','miller','mini','manu']
console.log(a);

// remove misi from the given array
a.splice(2,1)
console.log(a);

// remove min and manu
a.splice(2,2)
console.log(a);

// add maxwell as the third item in the given array
a.splice(2,0,'maxwell')
console.log(a);

// remove miller and add ken at the  same poistion as that of miller
a.splice(1,1,'ken')
console.log(a);