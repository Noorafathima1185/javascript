class Student{

    //constructor
    constructor(sid,sname,smark){
        this.stdid = sid
        this.stdname = sname
        this.stdmark = smark
        this.studentdisplay()
    }
    studentdisplay(){
        console.log(`student details: id is ${this.stdid} name is ${this.stdname} mark is ${this.stdmark}`);
    }
}

const std1 = new Student(1001,'ann',89)
const std2 = new Student(1422,'max',57)
const std3 = new Student(1053,'fahad',95)