let score="30abc";
let score1=null;

console.log(typeof(score));
let value=Number(score1 );
console.log(typeof(value));
console.log(value);
console.log(value);

let m1=1;
let m2=Boolean(m1);
console.log(m2);

// so it will return NaN because the string contains non-numeric characters. The Number() function tries to convert the string to a number, but since "30abc" is not a valid number, it results in NaN (Not-a-Number).

// "33" => 33
//""33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN

// 1 => true
// 0 => false
// "ms" => true/

// "" => false
