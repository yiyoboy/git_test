// let a= 1;
// let b=2;
// let c=3;
// let object ={name:'liu',age:9};
// let {name,age=8} = object;
let name = 'liu',age = 9;
let descOld = `12123${name}`;
// let desc = "12123${name}";
// // 模板替换
// function replace(desc){
//     return desc.replace(/\$\{([^}]+)\}/g,function(matched,key){
//         console.log(arguments);
//         return eval(key)
//     })
// }


//模板字符串可以换行
// let users= [{id:1,name:'liu1'},{id:2,name:'liu2'},]
// let newList = users.map(
//     function(user,index){
//         return `<li>${user.id}:${user.name}</li>`

//     }
// ).join("");
// let newUl = (
//     `
//     <ul>${newList}</ul>
//     `
// )

// //映射，把老鼠组的每一个元素映射为新数组的每一个元素。 
// console.log(newUl);

let str3= 'liudawei'; 
console.log(str3.startsWith('liu')) //字符串开头，判断数据常用
console.log(str3.endsWith('wei')) //字符串开头，判断文件类型常用
let content = 'abc';
console.log(content.includes('b'));//判断一个字符串是否包含另一个字符串
let x = 'xx';
console.log(x.repeat(5))// 字符串重复，返回一个新字符串

let  str5 = "abc";
console.log(str5.padStart(5,'0'))
console.log(str5.padEnd(5,'0'))