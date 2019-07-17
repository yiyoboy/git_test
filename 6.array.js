// // 数组方法
// // filter

// Array.prototype.filter = function(fn){
//     let newArr = [];
//     for(let i =0; i<this.length;i++){
//         let flag= fn(this[i]);
//         flag&&newArr.push(this[i])
//     }
//     return newArr
// }
// let arr1 =[20,43,1,23,89]
// let arr2 = arr1.filter(function(item){ 
//         return  item>10
// })

// // console.log(arr2);
// let arr4 = Array(3);
// //创建长度为3 的数组
// arr4.fill(2);
// // 添加数组内容都为1
// console.log(arr1);

// let arr5  = [1,2,3,4,5,3];
// let arr6 = arr5.find(function(item){
//     return item ==5;
// })
// // 复写find
// Array.prototype.find = function(fn){
//     for(let i =0; i<this.length;i++){
//         let flag = fn(this[i]);
//         if(flag){
//             return this[i]
//         }
//     }

// }

// console.log(arr6)


let arr8  = [1,2,3,4,5,3];
let arr9 = arr8.findIndex(function(item){
    return item ==5;
})
// // 复写find
// Array.prototype.findIndex = function(fn){
//     for(let i =0; i<this.length;i++){
//         let flag = fn(this[i]);
//         if(flag){
//             return i
//         }
//     }

// }

// console.log(arr9)
//复写every 要求每一个元素都要符合条件

// Array.prototype.every = function(fn){
//     let flag= true;
//     for(i=0; i<this.length; i++){
//         let flag = fn(this[i]);
//         if(!flag){
//             return false
//         }

//     }
//     return flag
// }

function print(){
    console.log(arguments);

    Array.from(arguments).forEach(
        function(item){
            console.log(item)
        }
    );
    
}
print('a','b','c')


