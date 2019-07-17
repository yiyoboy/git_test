// 函数

//1. 默认参数
// function ajax(url=new Error('url不能为空'),method='GET',dataType='json'){
//     console.log(arguments);
// console.log(url)
// console.log(method)
// console.log(dataType)
// }
// ajax('/user','POST')

//展开函数
// function sum (prefix, ...rest){
//     //rest = [1,2,3,4];
//     let result = 0;
//     //1 循环求和
//     //循环数组中的每一个元素，把她们一次传入对应的函数
//     // rest.forEach(function(item){
//     //     result+=item;
//     // })

//     // return prefix+(result) ;
//     //reduce 计算 汇总 梳理 吧一个数组中的一堆值计算出来一个值
// }
//  console.log( sum('$',1,2,3,4));
// 可以传一个参数，也可以传两个参数
//第二个参数表示初始值
// 上一次执行结果会成为下一次的初始值
//  let rest = [1,2,3,4];
//  let result02 = rest.reduce(function(val,item,index,origin){
//     //return val +item  求和
//     //求平均值
//     //如果没有给初始值，第一次执行函数的时候，val= 第一个元素 item =第二个元素
//     let sum  = val +item;
//     if(index  == rest.length-1){
//         return sum /origin.length
//     }
//     else{
//         return sum;
//     }

// },0)
//展开运算符
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = [...arr1,...arr2];
// console.log(arr3)
 

//  console.log(result02)

let obj1 = {name:'dde'};
let obj2 = {age:2};
// obj2.age =3;
let obj3 = {...obj1,...obj2};
obj2.age=3;


//let obj3 = Object.assign(obj1,obj2)  //es5    或循环赋值


console.log(obj3,obj2)


 