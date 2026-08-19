// spread and rest operator

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
var arr3 = [...arr1,...arr2];
console.log(arr3);

var arr4 = [1,2,3,4,5];
var arr5=[...arr4,6,...arr1];
console.log(arr5);