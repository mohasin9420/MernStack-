const student ={name:'arun',position:'first',rollno:1}

const {name,position,rollno}=student;
console.log(name);
console.log(position);
console.log(rollno);

// let job,division;
// ({job,division}={job:'developer',division:'IT'});
// console.log(job);
// console.log(division);
// // without assignment

let job,division;
({job,division} = {job:'trainee',division:'development'});
console.log(job);
console.log(division);