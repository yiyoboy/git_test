// 箭头函数

// let sum = function (a,b){
//     return a+b;
// }
// let sumArrow = (a,b)=> a+b;
// console.log(sum(1,2));
// console.log(sumArrow(4,5));
// 如果只有一个参数，可以省略小括号
// 如果只有返回值，没有函数体代码，则可以省略{}



// // 箭头函数没有自己的this，会使用上层的this
// let  obj ={
//     name:'liudawei',
//     getName(){
//         // setTimeout(function(){
//         //     console.log(this.name);

//         // },1000)
//         setTimeout(()=>{console.log(this.name);},1000)
        
//     }
// }
// obj.getName();

let obj2= {
    name:'jiantou',
    getName:(a,b)=>{
        console.log(this);
        return a+b
    }
}

// let obj3 = {
//     name:'obj3',
//     gn:obj2.getName
// }
console.log(obj2.getName(1,2));




