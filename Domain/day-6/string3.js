function student(id,name ,qualification)
{
    this.id=id;
    this.name=name;
    this.qualification=qualification;

}
// it is global variable and can be accessed by all the objects of student class
student.prototype.address="Bangalore";

var stud1=new student(1,"Anudip","MERN Stack");
console.log("Student ID: " + stud1.id);
console.log("Student Name: " + stud1.name);
console.log("Student Qualification: " + stud1.qualification);
console.log("Student Address: " + stud1.address);


var stud2=new student(2,"Mohasin","Java");
console.log("Student ID: " + stud2.id);
console.log("Student Name: " + stud2.name);
console.log("Student Qualification: " + stud2.qualification);
console.log("Student Address: " + stud2.address);
