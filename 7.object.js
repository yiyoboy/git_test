//对象
// let name= 'zfpx';
// let age = 9;
// //如果对象的属性名和变量名一样的话可以二合一
// let obj = {name,age}
// console.log(obj);

let obj1 ={age:1};
let obj2= {age:2};
let obj3={};

let obj4 ={
    __proto__:obj2,
}
Object.setPrototypeOf(obj3,obj1)
// obj3.__proto__ = obj1
console.log(obj3.age)