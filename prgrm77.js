//[id, name, designation, location, salary, experience]

// employee =[ 
//     [1000,'Neel','developer','kochi',25000,3],

class Employee{
    //property
    empname
    empdesig
    emploca
    empsalary
    //constuctor
    constructor(ename,edesig,eloca,esal){
        this.empname = ename
        this.empdesig = edesig
        this.emploca = eloca
        this.empsalary = esal
    }
    //methods
    display(){
        console.log(`employee name is ${this.empname}`);
    }
}

//object

const emp1 = new Employee('ann','developer','kochi',25000)
emp1.display()

const emp2 = new Employee('max','hr','calicut',30000)
emp2.display()